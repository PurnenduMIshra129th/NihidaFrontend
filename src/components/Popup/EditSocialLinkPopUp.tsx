import { Formik } from "formik"
import { useState } from "react"
import { useSelector } from "react-redux"

import { selectSocialLink } from "../../contexts/slice/socialLinkSlice"
import { apiRequest } from "../../services/apiService"
import { IEditSocialLinkPopUpProps } from "../../types/popUp/popUp.types"
import Button from "../Button/Button"
import { CrossIcon } from "../Icons/Icon"
import FormikInput from "../Input/FormikInput"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function EditSocialLinkPopUp(props: IEditSocialLinkPopUpProps) {
    const { setIsPopUpOpened = () => false, } = props
    const socialLinkList = useSelector(selectSocialLink)
    const [initialValues] = useState({instagramUrl: '', facebookUrl: '', twitterUrl: '', linkedinUrl: '', youtubeUrl: '', whatsappUrl: '', telegramUrl: '', phoneNumber1: '', phoneNumber2: ''})
        

    return (
        <>
            <Formik
                initialValues={socialLinkList.length > 0 ? socialLinkList[0] : initialValues}
                enableReinitialize
                onSubmit={(values) => {
                    apiRequest(`/socialLink/updateSocialLink/${socialLinkList[0]._id}`, "POST", values)
                        // eslint-disable-next-line no-console
                        .then((response: unknown) => console.log("SocialLink Updated Successfully:", response))
                        // eslint-disable-next-line no-console
                        .catch((error: unknown) => console.error("Error updating SocialLink:", error));
                }}
            >{({ handleSubmit }) => (
                <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-zinc-500 bg-opacity-50">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow-sm ">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
                                <Typography className="text-lg font-semibold text-gray-900" text={`Edit SocialLink Content for ID: ${socialLinkList[0]._id}`} />
                                <div className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => setIsPopUpOpened(false)}>
                                    <CrossIcon className="w-5 h-5" />
                                </div>
                            </div>
                            <form className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Instagram Link" name="instagramUrl" label="Instagram Link" />
                                    </div> 

                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Facebook Link" name="facebookUrl" label="Facebook Link" />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Twitter Link" name="twitterUrl" label="Twitter Link" />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Linkedin Link" name="linkedinUrl" label="Linkedin Link" />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Youtube Link" name="youtubeUrl" label="Youtube Link" />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Whatsapp Link" name="whatsappUrl" label="Whatsapp Link" />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Telegram Link" name="telegramUrl" label="Telegram Link" />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Phone Number 1" name="phoneNumber1" label="Phone Number 1" />
                                    </div>

                                    <div className="col-span-2">
                                        <FormikInput placeholder="Type Phone Number 2" name="phoneNumber2" label="Phone Number 2" />
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

export default EditSocialLinkPopUp