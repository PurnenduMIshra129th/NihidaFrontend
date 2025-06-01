export interface IApiResponse {
  statusCode: number;
  message: string;
  data: INewsApiData[]
}
export interface INewsApiData {
  _id: string;
  heading: string;
  description: string;
  createdAt: string;
  imagePath: string;
}
export interface INewsResponseById {
  statusCode: number;
  message: string;
  data: INewsApiData
}