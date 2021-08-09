export interface GetExpectedTransferDateRequest {
  accountId: number;
  actualTransferDate: Date;
  bankCode: string;
  accountType: string;
  customFormatDate: true;
}
