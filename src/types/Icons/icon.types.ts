
export interface IIconProps {
    className?: string;
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