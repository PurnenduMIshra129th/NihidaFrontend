export interface IApiResponse {
  statusCode: number;
  message: string;
  data: IMediaApiData[]
}
export interface IMediaApiData {
  _id: string;
  heading: string;
  description: string;
  createdAt: string;
  imagePath: string;
}
export interface IMediaResponseById {
  statusCode: number;
  message: string;
  data: IMediaApiData
}