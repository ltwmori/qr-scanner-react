import axios from "axios";
import { IResponseType } from "../ts/types";

export const api = axios.create({
  baseURL: "https://tst.agrofintech.kz/api/v1/",
});

export const getUser = (hash: string): Promise<IResponseType> =>
  api.get(`getUser/${hash}`).then((res) => res.data);
