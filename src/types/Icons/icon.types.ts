import {nameOfIcon } from "../../utils/constant";

export interface IIconProps {
    className?: string;
}
export interface IIconButtonProps {
    name: keyof typeof nameOfIcon
}

export interface IDonorCardIconProps{
    text?:string
}

export interface IIconWithTextProps {
    Icon: React.ElementType
    text?:string
    iconClassName?: string;
    textClassName?: string;
  
}