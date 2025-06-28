export interface IFocusActivityApiPayload {
  title: string;
  subtitle: string;
  description: string;
  impactStats: IImpactStat[];
  testimonials?: ITestimonial[];
  location?: string;
  date?: string | Date;
}
export interface IFocusActivityApiResponse extends ICreatedAt {
  title: string;
  subtitle: string;
  description: string;
  impactStats: IImpactStat[];
  testimonials?: ITestimonial[];
  location?: string;
  date?: string | Date;
  files?: IFile[];
}
export interface ISignUpApiPayload {
  userName: string;
  email: string;
  password: string;
  role: string;
}
export interface ISignUpApiResponse {
  token: string;
  user: {
    email: string;
    name: string;
    password: string;
    role: string;
    __v: number;
    _id: string;
  };
}
export interface ILoginApiPayload {
  email: string;
  password: string;
}
export interface ILoginApiResponse {
  token: string;
  user: {
    email: string;
    name: string;
    password: string;
    role: string;
    __v: number;
    _id: string;
  };
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
  fileName: string;
  originalName: string;
  mimeType: string;
  serverFilePath: string;
  publicFilePath: string;
}
export interface IId {
  _id?: string;
}
export interface ICreatedAt extends IId {
  createdAt?: string;
}
export interface IFileApiData {
  files: IFile[];
}
