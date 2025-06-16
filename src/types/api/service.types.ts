export interface IApiResponse {
  statusCode: number;
  message: string;
  data: IServiceApiData[]
}
export interface IServiceApiData {
  _id: string;
  heading: string;
  description: string;
  createdAt: string;
  imagePath: string;
}
