import { Formik } from "formik"
import { useEffect, useState } from "react"

import Button from "../../components/Button/Button"
import { CrossIcon } from "../../components/Icons/Icon"
import FormikFileInput from "../../components/Input/FormikFileInput"
import FormikInput from "../../components/Input/FormikInput"
import Typography from "../../components/Text/Typography"
import { useData } from "../../contexts/context/data/DataContext"
import useFetch from "../../hooks/useFetch"
import { multiPartAPI } from "../../services/apiService"
import { INewsApiData } from "../../types/api/news.types"
import { IEditNewsPopUpProps, INewsItem } from "../../types/popUp/popUp.types"


// eslint-disable-next-line @typescript-eslint/naming-convention
function EditNewsPopUp(props: IEditNewsPopUpProps) {
    const { setIsPopUpOpened = () => false, id = 'noId' } = props
    const [initialValues, setInitialValues] = useState({ newsHeading: "", newsDescription: "", newsImage: '' });
    const { data } = useFetch<INewsItem>(`news/getNewsById/${id}`,"GET", undefined,true);
    const { fetchData } = useData<INewsApiData[]>();

    useEffect(() => {
        if (data && data.statusCode === 1) {
            setInitialValues({
                newsHeading: data.data.heading,
                newsDescription: data.data.description,
                newsImage: data.data.imagePath,
            });
        }
    }, [data]);

    const handleFormSubmit = async (values: { newsHeading: string; newsDescription: string; newsImage: string; }) => {
        const formData = new FormData();
        formData.append("heading", values.newsHeading);
        formData.append("description", values.newsDescription);
        if (values.newsImage) {
            formData.append("image", values.newsImage);
        }
        setIsPopUpOpened(false)
        await multiPartAPI(`/news/updateNews/${id}`, formData, true)
        await fetchData();
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                enableReinitialize
                onSubmit={(values) => {
                    handleFormSubmit(values)
                }}
            >{({ handleSubmit }) => (
                <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-zinc-500 bg-opacity-50">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow-sm ">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
                                <Typography className="text-lg font-semibold text-gray-900" text={`Edit News Content for ID: ${id}`} />
                                <div className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => setIsPopUpOpened(false)}>
                                    <CrossIcon className="w-5 h-5" />
                                </div>
                            </div>
                            <form className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Heading" name="newsHeading" label="Heading" />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikFileInput name="newsImage" label="Upload Image" currentFileName={initialValues.newsImage} />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Description" name="newsDescription" label="Description" isTextArea={true} />
                                    </div>
                                </div>
                                <Button name="Update" onClick={handleSubmit} />
                            </form>
                        </div>
                    </div>
                </div>
            )
                }
            </Formik>
        </>
    )
}

export default EditNewsPopUp