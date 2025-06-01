import { Formik } from "formik"
import { useEffect, useState } from "react"

import useFetch from "../../hooks/useFetch"
import { uploadMedia } from "../../services/apiService"
import { IEditMediaPopUpProps, IMediaItem } from "../../types/popUp/popUp.types"
import Button from "../Button/Button"
import { CrossIcon } from "../Icons/Icon"
import FormikFileInput from "../Input/FormikFileInput"
import FormikInput from "../Input/FormikInput"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function EditMediaPopUp(props: IEditMediaPopUpProps) {
    const { setIsPopUpOpened = () => false, id = 'noId' } = props
    const [initialValues, setInitialValues] = useState({ mediaHeading: "", mediaDescription: "", mediaImage: '' });
    const { data } = useFetch<{ statusCode: number; data: IMediaItem }>(`media/getMediaById/${id}`);

    useEffect(() => {
        if (data && data.statusCode === 1) {
            setInitialValues({
                mediaHeading: data.data.heading,
                mediaDescription: data.data.description,
                mediaImage: data.data.imagePath,
            });
        }
    }, [data]);
    
    return (
        <>
            <Formik
                initialValues={initialValues}
                enableReinitialize 
                onSubmit={(values) => {
                    const formData = new FormData();
                    formData.append("heading", values.mediaHeading);
                    formData.append("description", values.mediaDescription);
                    if (values.mediaImage) {
                        formData.append("image", values.mediaImage);
                    }
                    uploadMedia(`/media/updateMedia/${id}`, formData)
                        // eslint-disable-next-line no-console
                        .then((response: unknown) => console.log("Media Updated Successfully:", response))
                        // eslint-disable-next-line no-console
                        .catch((error: unknown) => console.error("Error updating media:", error));
                }}
            >{({ handleSubmit }) => (
                <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-zinc-500 bg-opacity-50">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow-sm ">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
                                <Typography className="text-lg font-semibold text-gray-900" text={`Edit Media Content for ID: ${id}`} />
                                <div className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => setIsPopUpOpened(false)}>
                                    <CrossIcon className="w-5 h-5" />
                                </div>
                            </div>
                            <form className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Heading" name="mediaHeading" label="Heading" />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikFileInput name="mediaImage" label="Upload Image" currentFileName={initialValues.mediaImage}/>
                                    </div>

                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Description" name="mediaDescription" label="Description" isTextArea={true} />
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

export default EditMediaPopUp