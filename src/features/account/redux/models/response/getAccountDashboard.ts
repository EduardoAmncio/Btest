import { Account } from "../account";

export interface GetAccountDashboardResponse {
  balance: number;
  accounts: Account[];
}
