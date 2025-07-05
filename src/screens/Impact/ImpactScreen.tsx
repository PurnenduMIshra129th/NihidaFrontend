import CountUpComponent from "../../components/CountUp/CountUp";
import Heading_1 from "../../components/Text/Heading_1";
import Typography from "../../components/Text/Typography";

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
            textDescription="Empowered 5,000+ learners through digital literacy, schooling, and accessible community-based education programs in underserved areas."
            end={5000}
            isPlusTrue={true}
          />
          <CountUpComponent
            text="Road safety"
            textDescription="Improved access to basic healthcare, awareness drives, and sanitation for 3,000+ individuals in rural communities."
            end={3000}
          />
          <CountUpComponent
            text="Consumer Empowerment"
            textDescription="Supported 1,000+ people with skills, training, and sustainable livelihood programs for financial independence."
            end={1000}
          />
          <CountUpComponent
            text="Energy conservation"
            textDescription="Launched 6,000+ actions in conservation, climate education, and eco-sustainability to protect community resources."
            end={6000}
             isPlusTrue={true}
          />
        </div>
      </div>
    </>
  );
}

export default ImpactScreen;
