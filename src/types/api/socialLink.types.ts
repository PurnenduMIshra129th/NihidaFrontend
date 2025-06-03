export interface IApiResponse {
  statusCode: number;
  message: string;
  data: ISocialLinkApiData[]
}
export interface ISocialLinkApiData {
  _id: string;
  createdAt: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  whatsappUrl: string;
  telegramUrl: string;
  phoneNumber1: string;
  phoneNumber2: string;
}
export interface INewsResponseById {
  statusCode: number;
  message: string;
  data: ISocialLinkApiData
}