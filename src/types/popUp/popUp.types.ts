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
export interface ICreateNewCarouselPopUpProps {
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ICreateNewVideoPopUpProps {
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
export interface IEditSocialLinkPopUpProps {
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
    id?: string
}
export interface IEditCarouselPopUpProps {
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
export interface IEditVideoPopUpProps {
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
export interface ISocialLinkItem {
    _id: string;
    time: string;
    __v: number;
    instagramUrl: string;
    facebookUrl: string;
    youtubeUrl: string;
    linkedinUrl: string;
    twitterUrl: string;
    whatsappUrl: string;
    telegramUrl: string;
    phoneNumber1: string;
    phoneNumber2: string;
}
export interface ICarouselItem {
    _id: string;
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
export interface IVideoItem {
    _id: string;
    heading: string;
    description: string;
    videoUrl: string
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
export interface IYouTubePopupProps {
    videoUrl: string; 
    textHeading?: string
    textDescription?: string
    setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>
    time?: string
}