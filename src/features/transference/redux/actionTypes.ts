import { Transference } from "./models/Transference";
import { Bank } from "./models/bank";

export enum TransferenceActions {
  CREATE_INTERNAL_TRANSFER_START = "CREATE_INTERNAL_TRANSFER_START",
  CREATE_INTERNAL_TRANSFER_SUCCESS = "CREATE_INTERNAL_TRANSFER_SUCCESS",
  CREATE_INTERNAL_TRANSFER_FAIL = "CREATE_INTERNAL_TRANSFER_FAIL",

  CREATE_MONEY_TRANSFER_START = "CREATE_MONEY_TRANSFER_START",
  CREATE_MONEY_TRANSFER_SUCCESS = "CREATE_MONEY_TRANSFER_SUCCESS",
  CREATE_MONEY_TRANSFER_FAIL = "CREATE_MONEY_TRANSFER_FAIL",

  LIST_BANKS_START = "LIST_BANKS_START",
  LIST_BANKS_SUCCESS = "LIST_BANKS_SUCCESS",
  LIST_BANKS_FAIL = "LIST_BANKS_FAIL",

  GET_EXPECTED_TRANSFER_DATE_START = "GET_EXPECTED_TRANSFER_DATE_START",
  GET_EXPECTED_TRANSFER_DATE_SUCCESS = "GET_EXPECTED_TRANSFER_DATE_SUCCESS",
  GET_EXPECTED_TRANSFER_DATE_FAIL = "GET_EXPECTED_TRANSFER_DATE_FAIL",

  UPDATE_TRANSFERENCE_DATA = "UPDATE_TRANSFERENCE_DATA",
  CLOSE_ALERT = "CLOSE_ALERT",
}

export interface CreateInternalTransferStartAction {
  type: TransferenceActions.CREATE_INTERNAL_TRANSFER_START;
}

export interface CreateInternalTransferSuccessAction {
  type: TransferenceActions.CREATE_INTERNAL_TRANSFER_SUCCESS;
}

export interface CreateInternalTransferFailAction {
  type: TransferenceActions.CREATE_INTERNAL_TRANSFER_FAIL;
  payload: string;
}

export interface CreateMoneyTransferStartAction {
  type: TransferenceActions.CREATE_MONEY_TRANSFER_START;
}

export interface CreateMoneyTransferSuccessAction {
  type: TransferenceActions.CREATE_MONEY_TRANSFER_SUCCESS;
}

export interface CreateMoneyTransferFailAction {
  type: TransferenceActions.CREATE_MONEY_TRANSFER_FAIL;
  payload: string;
}

export interface ListBanksStartAction {
  type: TransferenceActions.LIST_BANKS_START;
}

export interface ListBanksSuccessAction {
  type: TransferenceActions.LIST_BANKS_SUCCESS;
  payload: Bank[];
}

export interface ListBanksFailAction {
  type: TransferenceActions.LIST_BANKS_FAIL;
  payload: string;
}

export interface GetExpectedTransferDateStartAction {
  type: TransferenceActions.GET_EXPECTED_TRANSFER_DATE_START;
}

export interface GetExpectedTransferDateSuccessAction {
  type: TransferenceActions.GET_EXPECTED_TRANSFER_DATE_SUCCESS;
  payload: Date;
}

export interface GetExpectedTransferDateFailAction {
  type: TransferenceActions.GET_EXPECTED_TRANSFER_DATE_FAIL;
  payload: string;
}

export interface UpdateTransferenceDataAction {
  type: TransferenceActions.UPDATE_TRANSFERENCE_DATA;
  payload?: Transference;
}

export interface CloseAlertAction {
  type: TransferenceActions.CLOSE_ALERT;
}

export type TransferenceAction =
  | CreateInternalTransferStartAction
  | CreateInternalTransferSuccessAction
  | CreateInternalTransferFailAction
  | CreateMoneyTransferStartAction
  | CreateMoneyTransferSuccessAction
  | CreateMoneyTransferFailAction
  | ListBanksStartAction
  | ListBanksSuccessAction
  | ListBanksFailAction
  | GetExpectedTransferDateStartAction
  | GetExpectedTransferDateSuccessAction
  | GetExpectedTransferDateFailAction
  | UpdateTransferenceDataAction
  | CloseAlertAction;
