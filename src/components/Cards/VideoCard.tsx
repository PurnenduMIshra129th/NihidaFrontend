import { useState } from 'react'

import img2 from '../../assets/img2.jpg'
import { IVideoCardProps } from '../../types/cards/card.type'
import YouTubePopup from '../Popup/YoutubePopUp'
import Typography from '../Text/Typography'
// eslint-disable-next-line @typescript-eslint/naming-convention
function VideoCard(props:IVideoCardProps) {
  const {textHeading = 'no Heading', textDescription = 'no Description', imageURL = img2, videoUrl ='' , textTime = 'no Time'} = props
  const [isPopUpOpened, setIsPopUpOpened] = useState(false)
  return (
    <>
    <div className='flex justify-center items-center flex-col shadow-lg hover:cursor-pointer pb-[1rem] px-2' onClick={()=>setIsPopUpOpened(true)}>
        <div className='sm:w-64 w-full '>
            <img src={imageURL} alt="" className='h-[15rem] object-cover w-full'/>
        </div>
        <Typography text={textHeading} className='my-3 hover:underline cursor-pointer sm:text-[12px] text-[20px] text-custom_black_1 hover:text-custom_orange_1 mt-9'/>
    </div>
    {isPopUpOpened && <YouTubePopup videoUrl={videoUrl} textHeading={textHeading} textDescription={textDescription} setIsPopUpOpened={setIsPopUpOpened} time={textTime}/>}
    </>
  )
}

export default VideoCard