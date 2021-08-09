import { Dispatch } from "redux";
import {
  PaymentAction,
  PaymentStartAction,
  PaymentSuccessAction,
  PaymentFailAction,
  PaymentUpdateAction,
} from "./actionTypes";
import { InforsPaymentRequest } from "./models/request/inforsPayment";
import { HttpClient } from "_config/http";
import { ApiResponse } from "_config/api";
import { getBaseRequestData } from "_utils/http";
import { BarcodePaymentData } from "./models/BarcodePaymentData";

interface PaymentData {
  tags?: string[];
  paymentDate?: Date;  
  description?: string;
}  

export const updatePaymentState = (paymentData: PaymentData) => {
  return async (dispatch: Dispatch) => {

    try {
      dispatch<PaymentUpdateAction>({
        type: PaymentAction.PAYMENT_UPDATE,
        payload: paymentData
      });
      
    } catch (error) {
      dispatch<PaymentFailAction>({
        type: PaymentAction.PAYMENT_FAIL,
        payload: "Os campos informados estão inválidos",
      });
    }
  }
};

export const findInforsPaymentByBarCode = (_barcode: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch<PaymentStartAction>({
        type: PaymentAction.PAYMENT_START,
      });

      const { url, defaultHeaders, accountId } = getBaseRequestData("/Payments/FindInfosPaymentByBarcode");
      const data: InforsPaymentRequest = {
        accountId: accountId!,
        barcode: _barcode
      };

      const response = await HttpClient.post<BarcodePaymentData>(url, data, {
        headers: defaultHeaders,
      });
    
      const barcodePaymentData: BarcodePaymentData = response.data.data;

      dispatch<PaymentSuccessAction>({
        type: PaymentAction.PAYMENT_SUCCESS,
        payload: {
          barcode: _barcode,
          barcodePaymentData: barcodePaymentData
        }
      });
    }
    catch (error) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<PaymentFailAction>({
        type: PaymentAction.PAYMENT_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };
};