import CountUp from 'react-countup';

import Typography from '../Text/Typography';
interface ICountUpComponentProps{
    text?:string
    start?:number
    end?:number
    duration?:number
}
// eslint-disable-next-line @typescript-eslint/naming-convention
function CountUpComponent(props : ICountUpComponentProps) {
    const {text ,start = 0 ,end=1000,duration=10}=props;
  return (
    <>
    <div className='mx-5 w-[150px]'>
    <CountUp start={start} end={end} duration={duration} className='font-extrabold sm:text-[40px] text-[20px] text-custom_orange_1'/>
    <Typography text={text} className='my-4 text-[14px] font-semibold text-custom_maroon'/>
    </div>
    </>
  )
}

export default CountUpComponent