import { on, createReducer } from '@ngrx/store';
import { User } from '@auth/models/user';
import { AuthApiActions, AuthActions } from '../actions';

export interface State {
  user: User | null;
};

export const initialState: State = {
  user: null
};

export const reducer = createReducer(
  initialState,
  on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user})),
  on(AuthActions.logout, () => initialState)
);

export const getUser = (state: State) => state.user;