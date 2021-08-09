import { StoreState } from "redux/state";
import { ConfigProvider } from "_config/configProvider";

interface BaseRequestData {
  url: string;
  defaultHeaders: {
    ApiVersion: number;
  };

  taxId?: string;
  accountId?: number;
  userTaxId?: string;
  accountTaxId?: string;
  token?: string;
}

export const getBaseRequestData = (
  endpoint: string,
  state?: StoreState
): BaseRequestData => {
  return {
    url: `${ConfigProvider.config.api.baseUrl}${endpoint}`,
    defaultHeaders: ConfigProvider.config.api.defaultHeaders,

    taxId: state?.auth.user?.taxId,
    accountId: state?.account.account?.accountId,
    userTaxId: state?.auth.user?.taxId,
    accountTaxId: state?.account.account?.taxId,
    token: state?.auth.token,
  };
};
