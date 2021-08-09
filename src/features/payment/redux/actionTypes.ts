import { BarcodePaymentData } from './models/BarcodePaymentData';

export enum PaymentAction {
    PAYMENT_START = "PAYMENT_START",
    PAYMENT_SUCCESS = "PAYMENT_SUCCESS",
    PAYMENT_UPDATE = "PAYMENT_UPDATE",
    PAYMENT_FAIL = "PAYMENT_FAIL",
    PAYMENT_LOADING = "PAYMENT_LOADING"
}

export interface PaymentStartAction {
    type: PaymentAction.PAYMENT_START;
}

export interface PaymentLoadingAction {
    type: PaymentAction.PAYMENT_LOADING;
}

export interface PaymentSuccessAction {
    type: PaymentAction.PAYMENT_SUCCESS;
    payload: {
        barcode: string,
        barcodePaymentData: BarcodePaymentData
    }
}

export interface PaymentUpdateAction {
    type: PaymentAction.PAYMENT_UPDATE;
    payload: BarcodePaymentData;
}

export interface PaymentFailAction {
    type: PaymentAction.PAYMENT_FAIL;
    payload: string;
}

export type PaymentActions =
    | PaymentStartAction
    | PaymentLoadingAction
    | PaymentSuccessAction
    | PaymentUpdateAction
    | PaymentFailAction;