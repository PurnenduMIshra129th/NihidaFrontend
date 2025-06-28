import { IFile } from "../api/api.type";

export interface IBannerScreenProps {
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