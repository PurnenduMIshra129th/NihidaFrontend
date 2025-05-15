import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import Heading from "../../components/Text/Heading"

// eslint-disable-next-line @typescript-eslint/naming-convention
function NewsSubscribePage() {
    return (
        <>
            <div className="flex flex-col w-full justify-center  py-7 bg-custom_maroon">
                <div className="mb-7">
                <Heading className="text-center text-custom_white" text="Subscribe to our newsletters and blogs"/>
                </div>
                <div className="flex justify-center my-5 h-[6rem]">
                    <div className="mx-4 w-[25%]">
                        <Input className="mx-4 py-5 rounded-lg" placeholder="Enter your name"/>
                    </div >
                    <div className="mx-4 w-[25%]">
                        <Input className="mx-4 py-5 rounded-lg" placeholder="Enter your email address"/>
                    </div>
                    <div className="ml-10">
                        <Button className="w-[12rem] py-5 bg-custom_yellow text-blue-800 hover:bg-custom_maroon hover:text-custom_yellow hover:border-2 hover:border-custom_yellow " name="Subscribe Now"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsSubscribePage