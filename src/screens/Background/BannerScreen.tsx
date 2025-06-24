import Heading_1 from "../../components/Text/Heading_1";
import Typography from "../../components/Text/Typography";
import { IBannerScreenProps } from "../../types/screens/screen.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function BannerScreen(props: IBannerScreenProps) {
  const {
    textHeading = "no heading provided",
    textDescription = "no description provided",
  } = props;
  return (
    <section
      className="relative w-full h-[400px] bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(/banner.png)` }}
    >
      <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-[#158f67]/30 z-0" />
      <div className="absolute top-0 bottom-0 left-1/4 w-1/4 bg-[#e9b929]/30 z-0" />
      <div className="absolute top-0 bottom-0 left-2/4 w-1/4 bg-[#fd4c42]/30 z-0" />
      <div className="absolute top-0 bottom-0 left-3/4 w-1/4 bg-[#396dc4]/30 z-0" />

      <div className="absolute bottom-[20%] z-10  px-4 text-center -translate-x-1/2 left-1/2">
        <Heading_1 text={textHeading} className="text-custom_white_1 "/>
        <Typography text={textDescription} className="text-custom_white_1 mt-4"/>
      </div>
    </section>
  );
}

export default BannerScreen;
