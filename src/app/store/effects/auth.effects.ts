import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '@app/services/auth.service';
import {
  Action,
  SetInitialUser,
  AuthActionTypes,
  SetCurrentUser,
  LoginUser,
  RegisterUser
} from '../actions/auth.action';
import { User } from '@app/models/user';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authService: AuthService) {}

  @Effect()
  setInitialUser$: Observable<Action> = this.action$.pipe(
    ofType<SetInitialUser>(AuthActionTypes.SET_INITIAL_USER),
    mergeMap((action: SetInitialUser) =>
      this.authService.whoami().pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err => of(err))
      )
    )
  );

  @Effect()
  loginUser$: Observable<Action> = this.action$.pipe(
    ofType<LoginUser>(AuthActionTypes.LOGIN_USER),
    mergeMap((action: LoginUser) =>
      this.authService.login(action.payload).pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err => of(err))
      )
    )
  );

  @Effect()
  registerUser$: Observable<Action> = this.action$.pipe(
    ofType<RegisterUser>(AuthActionTypes.REGISTER_USER),
    mergeMap((action: RegisterUser) =>
      this.authService.register(action.payload).pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err => of(err))
      )
    )
  );
}
