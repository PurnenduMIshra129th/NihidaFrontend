export interface ICreateNewMediaPopUpProps {
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ICreateNewNewsPopUpProps {
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ICreateNewServicePopUpProps {
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ICreateNewBlogPopUpProps {
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IDynamicEditPopUpProps {
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
    textCardHeading?: string
    textHeadingName?:string
    textHeadingPlaceHolder?:string,
    textHeadingLabel?:string,
    textDescriptionName?:string
    textDescriptionPlaceHolder?:string,
    textDescriptionLabel?:string
}

export interface IEditMediaPopUpProps {
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
    id?: string
}
export interface IEditNewsPopUpProps {
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
    id?: string
}
export interface IEditServicePopUpProps {
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
    id?: string
}
export interface IEditBlogPopUpProps {
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
    id?: string
}
export interface IMediaItem {
    _id: string;
    heading: string;
    description: string;
    time: string;
    __v: number;
    imagePath: string;
}
export interface INewsItem {
    _id: string;
    heading: string;
    description: string;
    time: string;
    __v: number;
    imagePath: string;
}
export interface IServiceItem {
    _id: string;
    heading: string;
    description: string;
    time: string;
    __v: number;
    imagePath: string;
}
export interface IBlogItem {
    _id: string;
    heading: string;
    description: string;
    time: string;
    __v: number;
    imagePath: string;
}