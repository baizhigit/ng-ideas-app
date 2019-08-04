import { User } from '@app/models/user';
import {
  Action,
  SetCurrentUser,
  AuthActionTypes
} from '@app/store/actions/auth.action';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null
};

export const authReducer: (state: AuthState, action: Action) => AuthState = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case AuthActionTypes.SET_CURRENT_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
