import OfferingCard1 from "../../components/OfferingCard/OfferingCard1"
import OfferingCard2 from "../../components/OfferingCard/OfferingCard2"
import OfferingCard3 from "../../components/OfferingCard/OfferingCard3"
import Heading from "../../components/Text/Heading"
import SubHeading from "../../components/Text/SubHeading"

// eslint-disable-next-line @typescript-eslint/naming-convention
function ServicesPage() {
  return (
   <>
   <div className="flex justify-center items-center flex-col w-[80%] m-3">
                <SubHeading text="Our Offerings" />
                <Heading text="Products & Services" className="text-custom_maroon"/>
                <div className="my-3 w-full flex flex-row">
                    <OfferingCard1/>
                    <OfferingCard2/>
                    <OfferingCard3/>
                </div>
            </div>
   </>
  )
}

export default ServicesPage