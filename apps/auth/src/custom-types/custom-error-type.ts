export interface CustomErrorType {
  statusCode: number;
  serializeErrors(): {
    message: string;
    field?: string;
  }[];
}
