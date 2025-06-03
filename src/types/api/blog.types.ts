export interface IApiResponse {
  statusCode: number;
  message: string;
  data: IBlogApiData[]
}
export interface IBlogApiData {
  _id: string;
  heading: string;
  description: string;
  createdAt: string;
  imagePath: string;
}
export interface IBlogResponseById {
  statusCode: number;
  message: string;
  data: IBlogApiData
}