import { createAction, props } from '@ngrx/store';
import { Credentials } from '@auth/models/user';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
)