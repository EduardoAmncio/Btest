import { Dispatch } from "redux";
import { ApiResponse } from "_config/api";
import { HttpClient } from "_config/http";
import {
  AccountActions,
  CloseAlertAction,
  GetAccountDashboardFailAction,
  GetAccountDashboardStartAction,
  GetAccountDashboardSuccessAction,
  GetBankStatementFailAction,
  GetBankStatementStartAction,
  GetBankStatementSuccessAction,
  GetAllAccountsFailAction,
  GetAllAccountsStartAction,
  GetAllAccountsSuccessAction,
  GetTransactionReceiptSuccessAction,
  GetTransactionReceiptFailAction,
  GetTransactionDetailsStartAction,
  GetTransactionDetailsSuccessAction,
  GetTransactionDetailsFailAction,
  GetTransactionReceiptStartAction,
  SelectAccountAction,
} from "./actionTypes";
import { AccountDashboard } from "features/account/redux/models/dashboard";
import { GetAccountDashboardRequest } from "features/account/redux/models/request/getAccountDashboard";
import { GetAccountDashboardResponse } from "features/account/redux/models/response/getAccountDashboard";
import { GetState } from "redux/state";
import { getBaseRequestData } from "_utils/http";
import { GetBankStatementResponse } from "./models/response/getBankStatement";
import { GetBankStatementRequest } from "./models/request/getBankStatement";
import { GetAccountByLoginResponse } from "./models/response/getAccountListByLogin";
import { GetAccountListByLoginRequest } from "./models/request/getAccountListByLogin";
import { TransactionReceipt } from "./models/transactionReceipt";
import { GetTransactionReceiptResponse } from "./models/response/getTransactionReceipt";
import { GetTransactionReceiptRequest } from "./models/request/getTransactionReceipt";
import { TransactionType } from "./models/transactionType";
import { OperationType } from "./models/operationType";
import { GetTransactionDetailsRequest } from "./models/request/getTransactionDetails";
import { GetTransactionDetailsResponse } from "./models/response/getTransactionDetails";
import { TransactionDetails } from "./models/transactionDetails";

export const getAccountDashboard =
  () => async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GetAccountDashboardStartAction>({
      type: AccountActions.GET_ACCOUNT_DASHBOARD_START,
    });

    try {
      const {
        url,
        defaultHeaders,
        userTaxId: taxId,
      } = getBaseRequestData("/Account/FindAccountDashboard", getState());
      const data: GetAccountDashboardRequest = { login: taxId! };

      const response = await HttpClient.post<GetAccountDashboardResponse>(
        url,
        data,
        { headers: defaultHeaders }
      );

      const { accounts, balance } = response.data.data;
      const dashboard: AccountDashboard = {
        accounts,
        balance,
      };

      dispatch<GetAccountDashboardSuccessAction>({
        type: AccountActions.GET_ACCOUNT_DASHBOARD_SUCCESS,
        payload: {
          account: accounts[0],
          dashboard,
        },
      });
    } catch (error) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetAccountDashboardFailAction>({
        type: AccountActions.GET_ACCOUNT_DASHBOARD_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const getBankStatement =
  (
    startDate?: Date,
    endDate?: Date,
    transactionType?: TransactionType,
    tags?: string[]
  ) =>
  async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GetBankStatementStartAction>({
      type: AccountActions.GET_BANK_STATEMENT_START,
    });

    try {
      const state = getState();
      const { url, defaultHeaders, accountTaxId } = getBaseRequestData(
        "/Account/FindBankStatement",
        state
      );

      if (!startDate) {
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 7);
      }

      endDate = endDate ?? new Date();

      if (!state.account.account) {
        throw new Error("Não foi possível encontrar a conta");
      }

      const data: GetBankStatementRequest = {
        taxId: accountTaxId!,
        accountId: state.account.account!.accountId,
        startDate: startDate,
        endDate: endDate,
        transactionType,
        tags,
      };

      const response = await HttpClient.post<GetBankStatementResponse>(
        url,
        data,
        { headers: defaultHeaders }
      );

      const responseData = response.data.data;
      const dayTransactionsList = responseData.transactions;
      dispatch<GetBankStatementSuccessAction>({
        type: AccountActions.GET_BANK_STATEMENT_SUCCESS,
        payload: dayTransactionsList,
      });
    } catch (error) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetBankStatementFailAction>({
        type: AccountActions.GET_BANK_STATEMENT_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const getTransactionDetails =
  (id: string, operationType: OperationType) =>
  async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GetTransactionDetailsStartAction>({
      type: AccountActions.GET_TRANSACTION_DETAILS_START,
    });

    try {
      const { url, defaultHeaders } = getBaseRequestData(
        "/Account/FindBankStatementDetails"
      );
      const state = getState();
      const data: GetTransactionDetailsRequest = {
        accountId: state.account.account!.accountId,
        externalIdentifier: id,
        operationType,
      };

      const response = await HttpClient.post<GetTransactionDetailsResponse>(
        url,
        data,
        { headers: defaultHeaders }
      );

      const responseData = response.data.data;
      const details: TransactionDetails = {
        ...responseData,
        date: new Date(responseData.date),
      };
      dispatch<GetTransactionDetailsSuccessAction>({
        type: AccountActions.GET_TRANSACTION_DETAILS_SUCCESS,
        payload: details,
      });
    } catch (error) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetTransactionDetailsFailAction>({
        type: AccountActions.GET_TRANSACTION_DETAILS_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const getTransactionReceipt =
  (id: string, operationType: OperationType) =>
  async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GetTransactionReceiptStartAction>({
      type: AccountActions.GET_TRANSACTION_RECEIPT_START,
    });

    try {
      const { url, defaultHeaders } = getBaseRequestData(
        "/Account/FindBankStatementReceipt"
      );
      const state = getState();
      const data: GetTransactionReceiptRequest = {
        accountId: state.account.account!.accountId,
        externalIdentifier: id,
        operationType,
      };

      const response = await HttpClient.post<GetTransactionReceiptResponse>(
        url,
        data,
        { headers: defaultHeaders }
      );

      const responseData = response.data.data;
      const receipt: TransactionReceipt = {
        ...responseData,
        date: responseData.date ? new Date(responseData.date) : null,
      };
      dispatch<GetTransactionReceiptSuccessAction>({
        type: AccountActions.GET_TRANSACTION_RECEIPT_SUCCESS,
        payload: receipt,
      });
    } catch (error) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetTransactionReceiptFailAction>({
        type: AccountActions.GET_TRANSACTION_RECEIPT_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const getAccountList =
  () => async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GetAllAccountsStartAction>({
      type: AccountActions.GET_ALL_ACCOUNTS_START,
    });

    try {
      const state = getState();
      const { url, defaultHeaders, accountTaxId } = getBaseRequestData(
        "Account/FindAllAccountsByTaxId",
        state
      );

      const data: GetAccountListByLoginRequest = {
        login: accountTaxId!,
      };

      const response = await HttpClient.post<GetAccountByLoginResponse>(
        url,
        data,
        { headers: defaultHeaders }
      );

      const responseData = response.data.data;
      const { accounts } = responseData;
      dispatch<GetAllAccountsSuccessAction>({
        type: AccountActions.GET_ALL_ACCOUNTS_SUCCESS,
        payload: accounts,
      });
    } catch (error) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetAllAccountsFailAction>({
        type: AccountActions.GET_ALL_ACCOUNTS_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const selectAccount = (accountId: number) => (dispatch: Dispatch) => {
  dispatch<SelectAccountAction>({
    type: AccountActions.SELECT_ACCOUNT,
    payload: accountId,
  });
};

export const closeAlert = () => (dispatch: Dispatch) => {
  dispatch<CloseAlertAction>({
    type: AccountActions.CLOSE_ALERT,
  });
};
