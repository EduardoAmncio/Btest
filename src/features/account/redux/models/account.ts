export interface Account {
  accountId: number;
  name: string;
  taxId: string;
  companyId: number;
  status: AccountStatus;
}

export enum AccountStatus {
  disabled,
  enabled,
}
