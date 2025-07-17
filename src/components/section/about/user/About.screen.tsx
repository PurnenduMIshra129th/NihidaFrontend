import { useNavigate } from "react-router";

import Button from "../../../Button/Button";
import Heading_1 from "../../../Text/Heading_1";
import Typography from "../../../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function AboutScreen() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-start flex-col sm:flex-row w-full flex-wrap md:px-[7rem] px-4 bg-custom_orange_1 pt-14 pb-12 gap-8">
        {/* Left Column */}
        <div className="sm:w-[30%] w-full">
          <Heading_1
            text="About Us"
            className="text-white mb-4 sm:mb-0 text-3xl sm:text-4xl leading-tight"
          />
        </div>

        {/* Right Column */}
        <div className="sm:w-[70%] w-full">
          <Typography
            text="The National Integrated Human and Industrial Development Agency (NIHIDA) is a non-governmental, non-profit organization established in 1992 and registered under the Society Registration Act XXI of 1860 on 26th October 1995 at IGR, Cuttack, Odisha. NIHIDA has been working to improve the quality of life for pro-poor communities by addressing rights-based issues and eradicating extreme poverty and hunger. The organization also focuses on preserving natural resources like water, soil, and ecological balance, strengthening institutional mechanisms, empowering community-based organizations, and conducting research to promote social inclusion and participatory development."
            className="text-white/90 text-[16px] sm:text-[17px] leading-relaxed "
          />
          <Button
            className="mt-6 w-52 py-3 bg-white text-custom_orange_1 font-semibold border-2 border-white hover:bg-custom_orange_2 hover:text-white transition"
            name="Read More"
            onClick={() => navigate("/about")}
          />
        </div>
      </div>
    </>
  );
}

export default AboutScreen;
