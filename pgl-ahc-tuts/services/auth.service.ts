import { httpRequest } from "./http.service";

export type ApiResponse<T> = {
  message: string;
  statusCode: number;
  object: T | null;
};

export type RegisterRequest = {
  fullname: string;
  email: string;
  pswd: string;
};

export type RegisterResponse = {
  id: number;
  fullname: string;
  email: string;
};

export const authService = {
  registerUser: (data: RegisterRequest) =>
    httpRequest<ApiResponse<RegisterResponse>>("/auth/register", "POST", data),
};
