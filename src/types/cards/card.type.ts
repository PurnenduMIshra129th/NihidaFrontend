export interface IEditDeleteMediaCardProps {
    textHeading?: string
    textDescription?: string
    imageURL?: string
    onDelete?: () => void
    id?:string
}
export interface IEditDeleteNewsCardProps {
    textHeading?: string
    textDescription?: string
    imageURL?: string
    onDelete?: () => void
    id?:string
}
export interface IEditDeleteServiceCardProps {
    textHeading?: string
    textDescription?: string
    imageURL?: string
    onDelete?: () => void
    id?:string
}
export interface IEditDeleteBlogCardProps {
    textHeading?: string
    textDescription?: string
    imageURL?: string
    onDelete?: () => void
    id?:string
}

export interface IFeedbackCardProps {
    aboutSection: string
    title: string
    description: string
}

export interface IManageCardProps {
    textHeading?: string
    Icon: React.ElementType
    link?: string
    AddNewPopUp?: React.ElementType
}
export interface ICardProps{
    textTime?:string
    textHeading?:string
    textDescription?:string
    imagePath?:string
    id?:string
    readMoreRouting?:string
}