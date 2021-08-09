export interface CreateInternalTransferRequest {
  accountId?: number;
  toTaxId?: string;
  transferValue?: number;
  transferDate?: Date | null;
  tags?: string[];
  description?: string;
}
