export interface IApiResponse {
  statusCode: number;
  message: string;
  data: ICarouselApiData[]
}
export interface ICarouselApiData {
  _id: string;
  createdAt: string;
  imagePath: string;
}
export interface ICarouselResponseById {
  statusCode: number;
  message: string;
  data: ICarouselApiData
}