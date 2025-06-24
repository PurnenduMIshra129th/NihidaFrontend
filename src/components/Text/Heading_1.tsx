import { IHeadingProps } from "../../types/Text/text.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function Heading_1(props: IHeadingProps) {
  const { className = "", text = "No text Provided" } = props;
  return (
    <>
      <h1
        className={`text-2xl md:text-3xl lg:text-4xl font-bold font-sans ${className}`}
      >
        {text}
      </h1>
    </>
  );
}

export default Heading_1;
