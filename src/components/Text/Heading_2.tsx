import { IHeadingProps } from "../../types/Text/text.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function Heading_2(props: IHeadingProps) {
  const { className = "", text = "No text Provided" } = props;
  return (
    <h3
      className={`text-xl md:text-2xl lg:text-3xl font-bold ${className}`}
    >
      {text}
    </h3>
  );
}

export default Heading_2;
