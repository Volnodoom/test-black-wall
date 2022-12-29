import axios, { AxiosInstance } from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT } from 'utils/constants';


export const createAPI = (): AxiosInstance => axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});
