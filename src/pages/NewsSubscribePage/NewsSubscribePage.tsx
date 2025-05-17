import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import Heading from "../../components/Text/Heading"

// eslint-disable-next-line @typescript-eslint/naming-convention
function NewsSubscribePage() {
    return (
        <>
            <div className="flex flex-col w-full justify-center  sm:py-7 py-3 bg-custom_maroon p-[1rem] sm:p-0">
                <div className="sm:mb-7 mb-2">
                <Heading className="text-center text-custom_white" text="Subscribe to our newsletters and blogs"/>
                </div>
                <div className="flex justify-center my-5 sm:h-[6rem] h-auto w-full flex-wrap sm:flex-nowrap gap-2">
                    <div className="sm:mx-4 mx-0 sm:w-[25%] w-full">
                        <Input className="sm:mx-4 mx-0 sm:py-5 py-3 rounded-lg" placeholder="Enter your name"/>
                    </div >
                    <div className="sm:mx-4 mx-0  sm:w-[25%] w-full">
                        <Input className="sm:mx-4 mx-0 sm:py-5 py-3 rounded-lg" placeholder="Enter your email address"/>
                    </div>
                    <div className="sm:ml-10 ml-0 sm:w-[25%] w-full mt-[1rem] sm:mt-0">
                        <Button className=" w-full sm:py-5 py-3  bg-custom_yellow text-blue-800 hover:bg-custom_maroon hover:text-custom_yellow hover:border-2 hover:border-custom_yellow " name="Subscribe Now"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsSubscribePage