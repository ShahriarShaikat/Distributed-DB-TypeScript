export type ApiResponse<T> = {
  message: string;
  payload: T | null;
  success: boolean;
};
