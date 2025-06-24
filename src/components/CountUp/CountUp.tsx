import CountUp from "react-countup";

import { ICountUpComponentProps } from "../../types/countUp/countUp.types";
import Heading_2 from "../Text/Heading_2";
import Typography from "../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function CountUpComponent(props: ICountUpComponentProps) {
  const {
    text,
    start = 0,
    end = 1000,
    duration = 10,
    textDescription = "",
    isPlusTrue = false,
  } = props;
  return (
    <>
      <div className="md:max-w-[25%] w-full">
        <div className="md:w-[70%] w-full md:min-h-[80px] h-auto">
          <Heading_2 text={text} className="text-custom_black_1 md:mt-0 mt-4" />
        </div>
        <CountUp
          start={start}
          end={end}
          duration={duration}
          className="text-custom_orange_1 text-2xl md:text-3xl lg:text-6xl font-bold font-sans "
        />
        {isPlusTrue && (
          <span className="text-custom_orange_1 text-2xl md:text-3xl lg:text-6xl font-bold font-sans">
            +
          </span>
        )}
        <div className="max-w-[70%]">
          <Typography
            text={textDescription}
            className="text-custom_grey_1 md:mt-6 mt-2 md:text-sm"
          />
        </div>
      </div>
    </>
  );
}

export default CountUpComponent;
