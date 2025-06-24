import { useNavigate } from "react-router";

import Button from "../../components/Button/Button";
import Heading_1 from "../../components/Text/Heading_1";
import Typography from "../../components/Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function AboutScreen() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-start flex-row  w-full  flex-wrap sm:flex-nowrap  md:px-[7rem] px-4 bg-custom_orange_1 pt-12 pb-10">
        <div className="md:w-[30%] w-full">
          <Heading_1
            text="About us"
            className="text-custom_white_1 mb-5 md:mb-0"
          />
        </div>
        <div className="md:w-[70%] w-full">
          <div>
            <Typography
              text="THE NATIONAL INTEGRATED HUMAN AND INDUSTRIAL DEVELOPMENT AGENCY (NIHIDA) is a non - governmental, non-profit organization established in 1992, registered under Society Registration Act XXI of 1860  , Dated on 26th October 1995 at IGR, Cuttack Odisha. NIHIDA has been working towards improving the quality of life of the pro-poor people by focusing on right based issues with eradicating extreme poverty, hunger, among socio-economically distressed people to access their entitlements. It also aims to preservation Natural Resources like Water, Soil & Ecological atmosphere for strengthen institutional mechanisms to enhance the quality of service delivery, enable community-based organizations to take up their development and welfare agenda, conduct research and build evidences in favour of the marginalized and underprivileged people to ensure social inclusion and participatory action."
              className="text-custom_white_2 text-justify"
            />
          </div>
          <Button
            className="mt-5 w-52 py-4 bg-custom_orange_1 border-2 border-custom_white_2 text-custom_white_2 hover:border-none"
            name="Read More"
            onClick={()=>navigate("/about")}
          />
        </div>
      </div>
    </>
  );
}

export default AboutScreen;
