import React from "react";
import { useNavigate } from "react-router";

import Heading_1 from "../Text/Heading_1";
import Typography from "../Text/Typography";

interface ISectionDividerProps {
  textHeading?: string;
  routePath?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const SectionDivider: React.FC<ISectionDividerProps> = (
  props: ISectionDividerProps
) => {
  const { textHeading, routePath = "/" } = props;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row w-full items-center sm:my-10 my-4">
      <Heading_1
        text={textHeading}
        className="text-custom_black_1 lg:text-5xl"
      />
      <div className="h-[1px] bg-custom_orange_1 w-full sm:w-auto sm:flex-grow rounded-md mx-10 my-4 sm:my-0" />
      <button
        type="button"
        onClick={() => navigate(`${routePath}`)}
        className="transform transition duration-500 ease-in-out delay-200 animate-fade-in-up hover:scale-105"
      >
        <Typography text="See all" className="text-custom_orange_1 md:text-xl" />
      </button>
    </div>
  );
};

export default SectionDivider;
