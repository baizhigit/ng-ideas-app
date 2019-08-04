import { Action } from '@ngrx/store';
import { User } from '@app/models/user';
import { AuthDTO } from '@app/models/auth';

export enum AuthActionTypes {
  LOGIN_USER = '[AUTH] Login User',
  REGISTER_USER = '[AUTH] Register User',
  SET_CURRENT_USER = '[AUTH] Set Current User',
  SET_INITIAL_USER = '[AUTH] Set Initial User'
}

export class LoginUser implements Action {
  readonly type = AuthActionTypes.LOGIN_USER;
  constructor(public payload: AuthDTO) {}
}

export class RegisterUser implements Action {
  readonly type = AuthActionTypes.REGISTER_USER;
  constructor(public payload: AuthDTO) {}
}

export class SetInitialUser implements Action {
  readonly type = AuthActionTypes.SET_INITIAL_USER;
  constructor() {}
}

export class SetCurrentUser implements Action {
  readonly type = AuthActionTypes.SET_CURRENT_USER;
  constructor(public payload: User) {}
}

export type Action = LoginUser | RegisterUser | SetInitialUser | SetCurrentUser;
