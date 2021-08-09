import { BarcodePaymentData } from "./models/BarcodePaymentData";
export interface PaymentState {
  barcode?: string;
  paymentData?: BarcodePaymentData;
  loading: boolean;
  errorMessage?: string;
}

export class LoadingtPaymentState implements PaymentState {
  barcode?: string;
  paymentData?: BarcodePaymentData;
  loading: boolean = true;
  errorMessage?: string;
}
export class StartPaymentState implements PaymentState {
  barcode?: string;
  paymentData?: BarcodePaymentData;
  loading: boolean = false;
  errorMessage?: string;
}

export class SuccessPaymentState implements PaymentState {

  loading: boolean = false;
  errorMessage?: string;

  constructor(
    public barcode: string,
    public paymentData: BarcodePaymentData,
  ) { }
}

export class UpdatePaymentState implements PaymentState {

  loading: boolean = false;
  errorMessage?: string;
  barcode?: string;

  constructor(
    public paymentData: BarcodePaymentData,
  ) { }
}

export class ErrorPaymentState implements PaymentState {
  loading: boolean = false;

  constructor(public errorMessage: string) { }
}
