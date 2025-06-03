export interface IApiResponse {
  statusCode: number;
  message: string;
  data: IVideoApiData[]
}
export interface IVideoApiData {
  _id: string;
  heading: string;
  description: string;
  videoUrl: string;
  createdAt: string;
  imagePath: string;
}
export interface INewsResponseById {
  statusCode: number;
  message: string;
  data: IVideoApiData
}