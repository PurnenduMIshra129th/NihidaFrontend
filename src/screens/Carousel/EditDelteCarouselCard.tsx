import { useState } from "react"

import Button from "../../components/Button/Button"
import { IEditDeleteCarouselCardProps } from "../../types/cards/card.type"
import { defaultImage } from "../../utils/constant"
import EditCarouselPopUp from "./EditCarouselPopUp"



// eslint-disable-next-line @typescript-eslint/naming-convention
function EditDeleteCarouselCard(props: IEditDeleteCarouselCardProps) {
    const [isEditPopUpOpened, setIsEditPopUpOpened] = useState(false)    
    const { imageURL = '' ,onDelete = () => {},id ='noID'} = props
    
    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 ">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={imageURL || defaultImage} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="mt-4">
                    <Button name='Edit' className='bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon ' onClick={()=>setIsEditPopUpOpened(true)}/>
                    <Button name='Delete' className='bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon ' onClick={()=>onDelete()}/>
                </div>
                </div>
            </div>
            {isEditPopUpOpened && <EditCarouselPopUp id={id} setIsPopUpOpened={setIsEditPopUpOpened}/>}
        </>
    )
}

export default EditDeleteCarouselCard