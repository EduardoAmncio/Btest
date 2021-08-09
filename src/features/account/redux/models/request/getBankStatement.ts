import { TransactionType } from "../transactionType";

export interface GetBankStatementRequest {
  taxId: string;
  accountId: number;
  startDate: Date;
  endDate: Date;
  transactionType?: TransactionType;
  tags?: string[];
}
