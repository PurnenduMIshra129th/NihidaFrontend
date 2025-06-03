export interface IButtonProps {
    name?: string;
    className?: string;
    onClick?: () => void;
}
export interface IViewAllProps extends IButtonProps {
    text?: string;
  }