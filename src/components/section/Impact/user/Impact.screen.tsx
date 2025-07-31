import CountUpComponent from "../../../CountUp/CountUp";
import Heading_1 from "../../../Text/Heading_1";
import Typography from "../../../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ImpactScreen() {
  return (
    <>
      <div className="w-[80%] flex flex-col">
        <div className="w-full flex flex-row flex-wrap items-end md:flex-nowrap justify-center md:mt-24 mt-6">
          <div className="md:w-[30%] w-full md:mb-0 mb-6">
            <Heading_1 text="Our Impact" className="lg:text-6xl text-custom_orange_1"/>
          </div>
          <div className="md:w-[70%] w-full">
            <Typography text="Through targeted initiatives in education, health, economy, and environment, NIHIDA has uplifted thousands of lives, creating measurable change and empowering communities to build resilient, sustainable futures." className="text-custom_grey_1 "/>
          </div>
        </div>
        <div className="flex flex-row flex-wrap md:flex-nowrap md:mt-24 mt-4">
          <CountUpComponent
            text="Water conservation"
            textDescription="NIHIDA conducted various Water Conservation Awareness and IEC activities on Water conservation education, It is refers to the practice of using water wisely and efficiently to reduce waste and ensure a sustainable supply for current and future needs."
            end={5000}
            isPlusTrue={true}
          />
          <CountUpComponent
            text="Road safety"
            textDescription=" NIHIDA organized different road safety advocacy and awareness Programmes under Puri district of Odisha state supported by MoRTH, Govt. of India sincerely and successfully. NIHIDA aims to reduce road accidents and fatalities through education, outreach, and policy influence. "
            end={10000}
            isPlusTrue={true}
          />
          <CountUpComponent
            text="Consumer Empowerment"
            textDescription="NIHIDA Focusing on Consumer Rights and Consumer Protection Act for empowerment to Consumers collaboration with District Administration, Puri & Department of Consumer Welfare, Food Distribution, Government of Odisha successfully. "
            end={15000}
            isPlusTrue={true}
          />
          <CountUpComponent
            text="Energy conservation"
            textDescription="NIHIDA conducted several Awareness activities on Energy conservation in Odisha state collaboration with PCRA, Govt.of India, IOCL,Govt. of India successfully. "
            end={6000}
             isPlusTrue={true}
          />
        </div>
      </div>
    </>
  );
}

export default ImpactScreen;
