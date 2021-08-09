import { User } from "./models/user";

export enum AuthAction {
  LOGIN_START = "LOGIN_START",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",

  SIGNOUT_START = "SIGNOUT_START",
  SIGNOUT_FINISH = "SIGNOUT_FINISH",
}

export interface LoginStartAction {
  type: AuthAction.LOGIN_START;
}

export interface LoginSuccessAction {
  type: AuthAction.LOGIN_SUCCESS;
  payload: {
    user: User;
    token: string;
  };
}

export interface LoginFailAction {
  type: AuthAction.LOGIN_FAIL;
  payload: string;
}

export interface SignOutStartAction {
  type: AuthAction.SIGNOUT_START;
}

export interface SignOutFinishAction {
  type: AuthAction.SIGNOUT_FINISH;
}

export type AuthActions =
  | LoginStartAction
  | LoginSuccessAction
  | LoginFailAction
  | SignOutStartAction
  | SignOutFinishAction;
