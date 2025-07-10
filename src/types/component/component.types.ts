import { IDocumentApiResponse, IFocusActivityApiResponse, IGalleryApiResponse, INewsApiResponse, ISocialLinkAndCommonImageApiResponse, IUpcomingEventApiResponse, IVideoApiResponse } from "../api/api.type";

export interface IImageCardGalleryProps {
  colSpan?: string;
  text?: string;
  imagePath?: string;
}
export interface IAddDataIntoFormProps {
  setIsPopUpOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IAdminCard {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onUpload?: () => void;
  onViewImages?: () => void;
}
export interface IFocusActivityAdminCard extends IAdminCard {
  data: IFocusActivityApiResponse;
}
export interface IGalleryAdminCard extends IAdminCard {
  data: IGalleryApiResponse;
}
export interface INewsAdminCard extends IAdminCard {
  data: INewsApiResponse;
}
export interface IVideoAdminCard extends IAdminCard {
  data: IVideoApiResponse;
}
export interface IUpcomingEventAdminCard extends IAdminCard {
  data: IUpcomingEventApiResponse;
}
export interface ISocialLinkAndCommonImageAdminCard extends IAdminCard {
  data: ISocialLinkAndCommonImageApiResponse;
}
export interface IVideoCard {
  id: string;
  title: string;
  description?: string;
  youtubeUrl: string;
  thumbnail?: string;
  date?: string;
  readMoreRouting?: string;
}
export interface IDocumentAdminCard extends IAdminCard {
  data: IDocumentApiResponse;
}

export interface IFormikFileInputProps {
  name?: string;
  label?: string;
  className?: string;
  currentFileName?: string;
  accept?: "image" | "pdf";
  isMultiple?: boolean;
}

export interface IUploadDocumentModalProps extends IFormikFileInputProps {
  isOpen: boolean;
  onClose: () => void;
  endpoint: string;
  note?: string;
  warning?: string;
}
export interface IFile {
  _id: string;
  fileName: string;
  originalName: string;
  mimeType: string;
  serverFilePath: string;
  publicFilePath: string;
}

export interface IEmptyStateProps {
  routingPath?: string;
  buttonText?: string;
}
export interface IImagePreviewModalProps {
  imageUrl: string;
  onClose: () => void;
  isOpen: boolean;
}
export interface IImageCardGalleryVariant2 {
  imagePath: string;
}
export interface IPDFPreviewCardProps {
  publicFilePath: string;
  originalName: string;
}

export interface IPDFDocumentCardUser {
  document: IDocumentApiResponse;
  readMoreRouting: string;
}
export interface IButtonProps {
    name?: string;
    className?: string;
    onClick?: () => void;
}
export interface IMissionSectionCard{
    textHeading?:string
    textDescription?:string
    routePath?:string
}
export interface ICardProps{
    textTime?:string
    textHeading?:string
    textDescription?:string
    imagePath?:string
    id?:string
    readMoreRouting?:string
}
export interface IDashboardSectionCardProps {
  title: string;
  route: string;
  description?: string;
  icon?: React.ReactNode;
}
export interface ICountUpComponentProps{
    text?:string
    start?:number
    end?:number
    duration?:number
    textDescription?:string
    isPlusTrue?:boolean
}
export interface IFormikInputProps {
  placeholder?: string;
  className?: string;
  label?: string;
  name: string; 
  type?: string;
  isTextArea?: boolean; 
  rows?: number;
  required?: boolean;
  transformOnBlur?: (value: string) => string [];
}
export interface ITypographyProps {
    text?: string
    className?: string
}
export interface IHeadingProps {
    text?: string
    className?: string
}
export interface IBannerProps {
  textHeading: string;
  textDescription: string;
}
export interface IGalleryScreenBySectionProps {
  heading: string;
  description: string;
  createdAt: string;
  imagePaths: string[];
}
export interface IGallerySectionWithLimitNumberOfImagesProps {
    files:IFile[]
}

