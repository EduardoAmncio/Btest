import { AccountType, TransferType } from "./enum";

export interface Transference {
  transferType?: TransferType;
  transferValue?: number;
  transferDate?: Date | null;
  expectedTransferDate?: Date;
  toTaxId?: string;
  toName?: string;
  bank?: string;
  bankBranch?: string;
  bankAccount?: string;
  bankAccountDigit?: string;
  accountType?: AccountType;
  tags?: string[];
  description?: string;
}
