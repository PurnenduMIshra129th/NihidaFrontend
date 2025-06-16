import Button from "../../components/Button/Button"
import CountUpComponent from "../../components/CountUp/CountUp"
import Typography from "../../components/Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function CountUpScreen() {
  return (
    <>
    <div className="w-full flex justify-center bg-orange-100 overflow-hidden p-[1rem] sm:p-0">
    <div className="flex flex-row flex-wrap sm:flex-nowrap sm:py-9 py-3 sm:w-[90%] w-full justify-around ">
        <div className="flex flex-col w-full sm:w-auto  justify-evenly ">
            <Typography text="We are changing the way India donates" className="sm:text-[20px] text-[16px] text-center font-bold text-nowrap"/>
            <Button name="Donate Now" className="bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon h-[3rem] my-3"/>
        </div>
        <div className="overflow-x-scroll sm:overflow-hidden flex-nowrap flex flex-row mt-3 sm:mt-0">
        <CountUpComponent text="NGOs listed " end={724}/>
        <CountUpComponent text="Indian Zip Codes" end={552}/>
        <CountUpComponent text="Sectors" end={13}/>
        <CountUpComponent text="UN Sustainable Development Goals" end={17}/>
        <CountUpComponent text="Funds raised" end={200000}/>
        </div>
    </div>
    </div>
    </>
  )
}

export default CountUpScreen