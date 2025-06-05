export interface ISuccessResponse<T> {
  statusCode: 1;
  message: string;
  data: T;
}

export interface IErrorResponse {
  statusCode: 0;
  errorCode: number;
  errorMessage: string;
  shortHand: string;
  error: string;
}