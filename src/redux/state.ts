import {
  AccountState,
  InitialAccountState,
} from "features/account/redux/state";
import {
  AuthState,
  UnauthenticatedState,
} from "../features/authentication/redux/state";

import {
  TransferenceState,
  InitialTransferenceState,
} from "../features/transference/redux/state";

export interface StoreState {
  auth: AuthState;
  account: AccountState;
  transference: TransferenceState;
}

export const initialStoreState: StoreState = {
  auth: new UnauthenticatedState(),
  account: new InitialAccountState(),
  transference: new InitialTransferenceState(),
};

export type GetState = () => StoreState;
