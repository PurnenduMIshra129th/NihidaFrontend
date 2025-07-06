import { IDocumentApiResponse, IFocusActivityApiResponse, IGalleryApiResponse, INewsApiResponse, IUpcomingEventApiResponse } from "../api/api.type";

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
export interface IUpcomingEventAdminCard extends IAdminCard {
  data: IUpcomingEventApiResponse;
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
export interface IDashboardSectionCardProps {
  title: string;
  route: string;
  description?: string;
  icon?: React.ReactNode;
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
