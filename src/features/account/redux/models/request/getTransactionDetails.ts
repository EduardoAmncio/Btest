import { OperationType } from "../operationType";

export interface GetTransactionDetailsRequest {
  accountId: number;
  externalIdentifier: string;
  operationType: OperationType;
}
