import Button from "../Button/Button"

interface IEditMangeCardProps {
    textHeading?: string
    textDescription?: string
    imageURL?: string
    onDelete?: () => void
}
// eslint-disable-next-line @typescript-eslint/naming-convention
function EditMangeCard(props: IEditMangeCardProps) {
    const { textHeading = 'no Heading', textDescription = 'no Description', imageURL = '' ,onDelete = () => {}} = props
    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 ">
           
                <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={imageURL} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{textHeading}</h5>
                    <p className="mb-3 font-normal text-gray-700">{textDescription}</p>
                    <div className="mt-4">
                    <Button name='Edit' className='bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon ' />
                    <Button name='Delete' className='bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon ' onClick={()=>onDelete()}/>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default EditMangeCard