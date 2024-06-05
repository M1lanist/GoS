import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
  baseURL: "https://go-school-api-dev.timelyskills.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  return apiInstance({ ...config, ...options }).then((r) => r.data);
  // .catch(err => console.log(err));
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
