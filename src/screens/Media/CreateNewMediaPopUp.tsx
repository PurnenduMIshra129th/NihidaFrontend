import { Formik } from "formik"

import AddNewButton from "../../components/Button/AddNewButton"
import { CrossIcon } from "../../components/Icons/Icon"
import FormikFileInput from "../../components/Input/FormikFileInput"
import FormikInput from "../../components/Input/FormikInput"
import Typography from "../../components/Text/Typography"
// import { useAlert } from "../../contexts/context/alert/AlertContext"
import { multiPartAPI } from "../../services/apiService"
// import { IApiResponse } from "../../types/api/media.types"
import { ICreateNewMediaPopUpProps } from "../../types/popUp/popUp.types"


// eslint-disable-next-line @typescript-eslint/naming-convention
function CreateNewMediaPopUp(props: ICreateNewMediaPopUpProps) {
    const { setIsPopUpOpened = () => false } = props
    // const { showAlert } = useAlert();
    return (
        <>
            <Formik
                initialValues={{ mediaHeading: "", mediaDescription: "", mediaImage: null }}
                onSubmit={async (values) => {
                    const formData = new FormData();
                    formData.append("heading", values.mediaHeading);
                    formData.append("description", values.mediaDescription);
                    if (values.mediaImage) {
                        formData.append("image", values.mediaImage);
                    }
                    setIsPopUpOpened(false)
                    await multiPartAPI("/media/createMedia", formData , true)
                }}
            >{({ handleSubmit }) => (
                <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-zinc-500 bg-opacity-50">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow-sm ">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
                                <Typography className="text-lg font-semibold text-gray-900" text="Create New Media Content" />
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
                                        <FormikFileInput name="mediaImage" label="Upload Image" />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Description" name="mediaDescription" label="Description" isTextArea={true} />
                                    </div>
                                </div>
                                <AddNewButton onClick={handleSubmit} />
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

export default CreateNewMediaPopUp