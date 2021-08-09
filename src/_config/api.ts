export interface Api {
  baseUrl: string;
  defaultHeaders: {
    ApiVersion: number;
  };
}

export interface ApiResponse<TData extends {} = {}> {
  success: true;
  data: TData;
  message: string;
}