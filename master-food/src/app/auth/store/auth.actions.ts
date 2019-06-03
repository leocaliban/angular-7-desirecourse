import { Action } from '@ngrx/store';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class Signup implements Action {
  readonly type: string = SIGNUP;

  constructor(public payload?: any) { }
}

export class Signin implements Action {
  readonly type: string = SIGNIN;

  constructor(public payload?: any) { }
}

export class Logout implements Action {
  readonly type: string = LOGOUT;

  constructor(public payload?: any) { }
}

export class SetToken implements Action {
  readonly type: string = SET_TOKEN;

  constructor(public payload: string) { }
}

export type AuthActions = Signup | Signin | Logout | SetToken;
