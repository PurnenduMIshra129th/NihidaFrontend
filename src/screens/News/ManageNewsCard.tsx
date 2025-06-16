import { useState } from "react"
import { useNavigate } from "react-router"

import Button from "../../components/Button/Button"
import { NewsIcon } from "../../components/Icons/Icon"
import Typography from "../../components/Text/Typography"
import CreateNewNewsPopUp from "./createNewNewsPopUp"



// eslint-disable-next-line @typescript-eslint/naming-convention
function ManageNewsCard() {
    const navigate = useNavigate()
    const [isPopUpOpened, setIsPopUpOpened] = useState(false)
    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                <div className="flex flex-col items-center pb-10 pt-4">
                    <div className="w-24 h-24 mb-3 ">
                        <NewsIcon className="w-full h-full" />
                    </div>
                    <Typography className="mb-1 text-xl font-medium text-gray-900" text='Manage News' />
                    <div className="flex mt-4 md:mt-6">
                        <Button name="View all" className="bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon " onClick={() => navigate('manage-all-news')} />
                        <Button name="Add a new" className="bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon " onClick={() => setIsPopUpOpened(true)} />
                    </div>
                </div>
            </div>
            {
                isPopUpOpened && <CreateNewNewsPopUp setIsPopUpOpened={setIsPopUpOpened} />
            }

        </>
    )
}

export default ManageNewsCard