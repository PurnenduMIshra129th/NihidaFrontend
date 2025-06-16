import { useState } from "react"

import Button from "../../components/Button/Button"
import Typography from "../../components/Text/Typography"
import { IEditDeleteBlogCardProps } from "../../types/cards/card.type"
import { defaultImage } from "../../utils/constant"
import EditBlogPopUp from "./EditBlogPopUp"



// eslint-disable-next-line @typescript-eslint/naming-convention
function EditDeleteBlogCard(props: IEditDeleteBlogCardProps) {
    const [isEditPopUpOpened, setIsEditPopUpOpened] = useState(false)    
    const { textHeading = 'no Heading', textDescription = 'no Description', imageURL = defaultImage ,onDelete = () => {},id ='noID'} = props
    
    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 ">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={imageURL} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <Typography className="mb-2 text-2xl font-bold tracking-tight text-gray-900" text={textHeading}/>
                    <Typography className="mb-3 font-normal text-gray-700" text={textDescription}/>
                    <div className="mt-4">
                    <Button name='Edit' className='bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon ' onClick={()=>setIsEditPopUpOpened(true)}/>
                    <Button name='Delete' className='bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon ' onClick={()=>onDelete()}/>
                </div>
                </div>
            </div>
            {isEditPopUpOpened && <EditBlogPopUp id={id} setIsPopUpOpened={setIsEditPopUpOpened}/>}
        </>
    )
}

export default EditDeleteBlogCard