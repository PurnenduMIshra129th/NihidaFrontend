import img2 from '../../assets/img2.jpg'
import Typography from '../Text/Typography'
// eslint-disable-next-line @typescript-eslint/naming-convention
function VideoCard() {
  return (
    <>
    <div className='flex justify-center items-center flex-col'>
        <div className='sm:w-64 w-full'>
            <img src={img2} alt="" />
        </div>
        <Typography text='Why is transparency essential in the social sector?' className='my-3 hover:underline cursor-pointer sm:text-[12px] text-[20px] text-custom_black_1 hover:text-custom_orange_1'/>
    </div>
    </>
  )
}

export default VideoCard