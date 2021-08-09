import { Dispatch } from "redux";
import {
  AuthAction,
  LoginFailAction,
  LoginStartAction,
  LoginSuccessAction,
  SignOutStartAction,
  SignOutFinishAction,
} from "./actionTypes";
import { LoginRequest } from "./models/request/login";
import { LoginResponse } from "./models/response/login";
import { User } from "./models/user";
import { HttpClient } from "_config/http";
import { ApiResponse } from "_config/api";
import { getBaseRequestData } from "_utils/http";
import { GetState } from "redux/state";

export const login = (taxId: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch<LoginStartAction>({
        type: AuthAction.LOGIN_START,
      });

      const { url, defaultHeaders } = getBaseRequestData("/Auth/Login");
      const data: LoginRequest = {
        login: taxId,
        password,
      };

      const response = await HttpClient.post<LoginResponse>(url, data, {
        headers: defaultHeaders,
      });

      const { token, ...userData } = response.data.data;
      const user = new User(
        userData.userId,
        userData.name,
        userData.mail,
        userData.taxId
      );

      dispatch<LoginSuccessAction>({
        type: AuthAction.LOGIN_SUCCESS,
        payload: {
          user,
          token,
        },
      });
    } catch (error) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<LoginFailAction>({
        type: AuthAction.LOGIN_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };
};

export const logout = () => async (dispatch: Dispatch, getState: GetState) => {
  dispatch<SignOutStartAction>({
    type: AuthAction.SIGNOUT_START,
  });

  try {
    const { url, defaultHeaders, userTaxId } = getBaseRequestData(
      "/Auth/Signout",
      getState()
    );
    const data = { taxId: userTaxId };

    await HttpClient.post(url, data, {
      headers: defaultHeaders,
    });
  } catch (e) {
  } finally {
    dispatch<SignOutFinishAction>({
      type: AuthAction.SIGNOUT_FINISH,
    });
  }
};
