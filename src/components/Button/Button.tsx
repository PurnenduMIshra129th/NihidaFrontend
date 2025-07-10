import { IButtonProps } from "../../types/component/component.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function Button(props: IButtonProps) {
  const {
    name = "No Name Provided",
    className = "",
    onClick = () => {},
  } = props;
  return (
    <button
      type="button"
      className={`font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2
    transition duration-300 ease-in-out transform hover:scale-105 hover:bg-rose-500 shadow-sm hover:shadow-lg focus:outline-none ${className}`}
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
}

export default Button;
