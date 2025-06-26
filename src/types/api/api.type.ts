export interface IFocusActivityApiData extends ICreatedAt {
  title: string;
  subtitle: string;
  description: string;
  impactStats: IImpactStat[];
  testimonials?: ITestimonial[];
  location?: string;
  date?: string | Date;
  files?: IFile[];
}
export interface IImpactStat extends IId {
  label?: string;
  value?: number;
  unit?: string;
}

export interface ITestimonial extends IId {
  name?: string;
  quote?: string;
  role?: string;
}
export interface IFile extends IId {
  fileName: string
  originalName: string
  mimeType: string
  serverFilePath: string
  publicFilePath: string
}
export interface IId{
  _id?: string
}
export interface ICreatedAt extends IId{
    createdAt?: string
}
