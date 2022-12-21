import { TakeableChannel } from "redux-saga";

export const GET_USER_REQUEST: any = "GET_USER_REQUEST";
export const GET_USER_FOUND: string = "GET_USER_FOUND";
export const GET_USER_NOT_FOUND: string = "GET_USER_NOT_FOUND";

export interface ILogin {
  email: string;
  password: string;
}

export const LoginAction = (data: ILogin) => {
  return { type: GET_USER_REQUEST, payload: data };
};