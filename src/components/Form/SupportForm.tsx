import Button from "../Button/Button"
import { AddressIcon, ContactsFilledIcon, EmailIcon, MobileIcon, MoneyIcon} from "../Icons/Icon"
import Checkbox from "../Input/Checkbox"
import SupportFormInput from "../Input/SupportFormInput"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function SupportForm() {
  return (
    <>
    <div className="sm:w-[80%] w-full bg-custom_blue_2 rounded-lg">
        <div className="h-[5rem] bg-custom_maroon  px-7 flex justify-start items-center rounded-lg">
            <Typography text="Support HelpYourNGO" className="text-custom_white text-[15px] font-semibold leading-5" />
        </div>
        <div className="w-full flex justify-center  items-center flex-col my-5">
            <div className="my-2 w-full   px-7">
            <SupportFormInput  placeholder="Full Name" Icon={ContactsFilledIcon}/>
            </div>
            <div className="my-2 w-full px-7">
            <SupportFormInput placeholder="Email ID" Icon={EmailIcon}/>
            </div>
            <div className="my-2 w-full px-7">
            <SupportFormInput placeholder="Contact" Icon={MobileIcon}/>
            </div>
            <div className="my-2 w-full px-7">
            <SupportFormInput placeholder="Address" Icon={AddressIcon}/>
            </div>
            <div className="my-2 w-full px-7">
            <SupportFormInput placeholder="PAN" Icon={ContactsFilledIcon}/>
            </div>
            <div className="my-2 w-full px-7">
            <SupportFormInput placeholder="Amount" Icon={MoneyIcon}/>
            </div>
            <div className="my-3 flex flex-col justify-start w-full px-11">
                <div className="my-2">
                <Checkbox text="I am an Indian citizen holding an Indian passport" inputClassName="bg-custom_white" labelClassName="text-custom_white"/>
                </div>
                <div className="mb-2">
                <Checkbox text="I accept all the terms and conditions" inputClassName="bg-custom_white" labelClassName="text-custom_white"/>
                </div>
            </div>
            <div className="my-2 w-full px-7">
            <Button className="w-full bg-custom_maroon py-4 hover:text-[20px] hover:bg-custom_orange_1" name="Donate Now"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default SupportForm