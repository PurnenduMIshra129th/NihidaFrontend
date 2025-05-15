import {nameOfIcon } from "../../utils/constant";

export interface IIconProps {
    className?: string;
}
export interface IIconButtonProps {
    name: keyof typeof nameOfIcon
}