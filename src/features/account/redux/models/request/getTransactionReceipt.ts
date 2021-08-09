import { OperationType } from "../operationType";

export interface GetTransactionReceiptRequest {
  accountId: number;
  externalIdentifier: string;
  operationType: OperationType;
}
