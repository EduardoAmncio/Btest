export interface BarcodePaymentData {
    receiverTaxId?: string;
    receiverName?: string;
    payerTaxId?: string;
    payerName?: string;
    paymentValue?: number;
    dueDate?: Date;
    discountValue?: Number;
    fineValue?: Number;
    tags?: string[];
    paymentDate?: Date;  
    description?: string;
}           

