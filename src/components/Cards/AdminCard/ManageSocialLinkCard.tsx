import { useState } from "react"

import Button from "../../Button/Button"
import { LinkIcon } from "../../Icons/Icon"
import EditSocialLinkPopUp from "../../Popup/EditSocialLinkPopUp"
import Typography from "../../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageSocialLinkCard() {
    const [isPopUpOpened, setIsPopUpOpened] = useState(false)
    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                <div className="flex flex-col items-center pb-10 pt-4">
                    <div className="w-24 h-24 mb-3 ">
                        <LinkIcon className="w-full h-full" />
                    </div>
                    <Typography className="mb-1 text-xl font-medium text-gray-900" text='Manage SocialLinks' />
                    <div className="flex mt-4 md:mt-6">
                        <Button name="Update SocialLinks" className="bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon " onClick={() => setIsPopUpOpened(true)} />
                    </div>
                </div>
            </div>
            {
                isPopUpOpened && <EditSocialLinkPopUp setIsPopUpOpened={setIsPopUpOpened} />
            }

        </>
    )
}

export default ManageSocialLinkCard