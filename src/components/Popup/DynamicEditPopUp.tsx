import { Formik } from "formik"

import { IDynamicEditPopUpProps } from "../../types/popUp/popUp.types"
import AddNewButton from "../Button/AddNewButton"
import { CrossIcon } from "../Icons/Icon"
import FormikInput from "../Input/FormikInput"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function EditPopUp(props: IDynamicEditPopUpProps) {
    const { setIsPopUpOpened = () => false,textCardHeading='Nothing Provided' ,textHeadingName = 'NoHeading',textHeadingPlaceHolder='Nothing Provided',textHeadingLabel='Nothing Provided',textDescriptionName = 'NoDescription',textDescriptionPlaceHolder='Nothing Provided',textDescriptionLabel='Nothing Provided' } = props
    return (
        <>
            <Formik
                initialValues={{ [textHeadingName]: "", [textDescriptionName]: "" }}
                // validationSchema={validationSchema}
                onSubmit={(values) => { console.log("Submitted values:", values); }}
            >{({ handleSubmit }) => (
                <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-zinc-500 bg-opacity-50">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow-sm ">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
                                <Typography className="text-lg font-semibold text-gray-900" text={textCardHeading}/>
                                <div className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => setIsPopUpOpened(false)}>
                                    <CrossIcon className="w-5 h-5" />
                                </div>
                            </div>
                            <form className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <FormikInput placeholder={textHeadingPlaceHolder} name={textHeadingName} label={textHeadingLabel} />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikInput placeholder={textDescriptionPlaceHolder} name={textDescriptionName} label={textDescriptionLabel} isTextArea={true} />
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

export default EditPopUp