import { PaymentAction, PaymentActions } from "./actionTypes";
import { BarcodePaymentData } from "./models/BarcodePaymentData";

import {
  PaymentState,
  ErrorPaymentState,
  StartPaymentState,
  LoadingtPaymentState,
  SuccessPaymentState,
  UpdatePaymentState,
} from "./state";

const initialState: PaymentState = new StartPaymentState();

export const paymentReducer = (state = initialState, action: PaymentActions) => {
  switch (action.type) {

    case PaymentAction.PAYMENT_LOADING:
      return new LoadingtPaymentState();

    case PaymentAction.PAYMENT_START:
      return new StartPaymentState();

    case PaymentAction.PAYMENT_SUCCESS:
      return new SuccessPaymentState(
        action.payload.barcode,
        action.payload.barcodePaymentData
      );

    case PaymentAction.PAYMENT_UPDATE:
      const updatedPaymentData: BarcodePaymentData = {
        ...state.paymentData,
        ...action.payload
      }

      return new UpdatePaymentState(updatedPaymentData);

    case PaymentAction.PAYMENT_FAIL:
      return new ErrorPaymentState(action.payload);

    default:
      return state;
  }
};
