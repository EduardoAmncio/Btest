import { combineReducers } from "redux";
import { accountReducer } from "features/account/redux/reducer";
import { authReducer } from "features/authentication/redux/reducer";
import { initialStoreState, StoreState } from "./state";
import { AuthAction } from "features/authentication/redux/actionTypes";
import { transferenceReducer } from "features/transference/redux/reducer";
import { paymentReducer} from "features/payment/redux/reducer";

export const appReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  transference: transferenceReducer,
});

export const rootReducer = (
  state: StoreState = initialStoreState,
  action: any
): StoreState => {
  if (action.type === AuthAction.SIGNOUT_FINISH) return initialStoreState;

  return appReducer(state, action);
};
