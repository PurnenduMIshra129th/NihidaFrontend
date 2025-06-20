import { Formik } from "formik"
import { useEffect, useState } from "react"

import Button from "../../components/Button/Button"
import { CrossIcon } from "../../components/Icons/Icon"
import FormikFileInput from "../../components/Input/FormikFileInput"
import Typography from "../../components/Text/Typography"
import { useData } from "../../contexts/context/data/DataContext"
import useFetch from "../../hooks/useFetch"
import { multiPartAPI } from "../../services/apiService"
import { ICarouselApiData } from "../../types/api/carousel.types"
import { ICarouselItem, IEditCarouselPopUpProps } from "../../types/popUp/popUp.types"


// eslint-disable-next-line @typescript-eslint/naming-convention
function EditCarouselPopUp(props: IEditCarouselPopUpProps) {
    const { setIsPopUpOpened = () => false, id = 'noId' } = props
    const [initialValues, setInitialValues] = useState({ carouselImage: '' });
    const { data } = useFetch<ICarouselItem>(`carousel/getCarouselById/${id}`,"GET", undefined,true);
    const { fetchData } = useData<ICarouselApiData[]>();

    useEffect(() => {
        if (data && data.statusCode === 1) {
            setInitialValues({
                carouselImage: data.data.imagePath,
            });
        }
    }, [data]);

    const handleFormSubmit = async (values: { carouselImage: string; }) => {
        const formData = new FormData();
        if (values.carouselImage) {
            formData.append("image", values.carouselImage);
        }
        setIsPopUpOpened(false)
        await multiPartAPI(`/carousel/updateCarousel/${id}`, formData ,true)
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
                                <Typography className="text-lg font-semibold text-gray-900" text={`Edit Carousel Content for ID: ${id}`} />
                                <div className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => setIsPopUpOpened(false)}>
                                    <CrossIcon className="w-5 h-5" />
                                </div>
                            </div>
                            <form className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">


                                    <div className="col-span-2">
                                        <FormikFileInput name="carouselImage" label="Upload Image" currentFileName={initialValues.carouselImage} />
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

export default EditCarouselPopUp