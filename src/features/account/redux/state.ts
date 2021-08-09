import { Account } from "./models/account";
import { AccountDashboard } from "./models/dashboard";
import { DayTransactions } from "./models/dayTransactions";
import { TransactionDetails } from "./models/transactionDetails";
import { TransactionReceipt } from "./models/transactionReceipt";

export interface AccountState {
  account?: Account;
  dashboard?: AccountDashboard;
  bankStatement?: DayTransactions[];
  transactionDetails?: TransactionDetails;
  transactionReceipt?: TransactionReceipt;
  loading: boolean;
  errorMessage?: string;
}

export class InitialAccountState implements AccountState {
  bankStatement?: DayTransactions[];
  errorMessage?: string;
  transactionDetails?: TransactionDetails;
  transactionReceipt?: TransactionReceipt;
  loading: boolean = false;

  constructor(public account?: Account, public dashboard?: AccountDashboard) {}
}

export class LoadingAccountState implements AccountState {
  loading: boolean = true;
  transactionDetails?: TransactionDetails;
  transactionReceipt?: TransactionReceipt;
  errorMessage?: string | undefined;

  constructor(
    public account: Account | undefined,
    public dashboard: AccountDashboard | undefined,
    public bankStatement: DayTransactions[] | undefined
  ) {}
}

export class SucessAccountState implements AccountState {
  loading: boolean = false;
  errorMessage?: string;

  constructor(
    public account: Account,
    public dashboard: AccountDashboard,
    public bankStatement: DayTransactions[] | undefined,
    public transactionDetails?: TransactionDetails,
    public transactionReceipt?: TransactionReceipt
  ) {}
}

export class FailAccountState implements AccountState {
  loading: boolean = false;

  constructor(
    public errorMessage: string,
    public account?: Account,
    public dashboard?: AccountDashboard,
    public bankStatement?: DayTransactions[]
  ) {}
}
