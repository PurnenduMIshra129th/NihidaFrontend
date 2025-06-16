import { IButtonProps } from "../../types/Buttons/button.type";
// eslint-disable-next-line @typescript-eslint/naming-convention
function Button(props: IButtonProps) {
    const {
        name = 'No Name Provided',
        className = '',
        onClick = () => { },
    } = props;
    return (
        <button
            type="button"
            className={`bg-custom_blue_2 text-custom_white focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ${className}`} onClick={() => onClick()}
        >
            {name}
        </button>
    );
}

export default Button;