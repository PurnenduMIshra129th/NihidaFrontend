import Button from "../../components/Button/Button"
import CountUpComponent from "../../components/CountUp/CountUp"
import Typography from "../../components/Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function CountUpPage() {
  return (
    <>
    <div className="w-full flex justify-center bg-orange-100">
    <div className="flex flex-row py-9 w-[90%] justify-around ">
        <div className="flex flex-col mx-5 justify-evenly">
            <Typography text="We are changing the way India donates" className="text-[20px] font-bold"/>
            <Button name="Donate Now" className="bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon h-[3rem]"/>
        </div>
        <CountUpComponent text="NGOs listed" end={724}/>
        <CountUpComponent text="Indian Zip Codes" end={552}/>
        <CountUpComponent text="Sectors" end={13}/>
        <CountUpComponent text="UN Sustainable Development Goals" end={17}/>
        <CountUpComponent text="Funds raised" end={200000}/>
    </div>
    </div>
    </>
  )
}

export default CountUpPage