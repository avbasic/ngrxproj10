import { createAction, props } from '@ngrx/store';

export const loadAuths = createAction(
  '[Auth] Load Auths'
);

export const loadAuthsSuccess = createAction(
  '[Auth] Load Auths Success',
  props<{ data: any }>()
);



export const setAuth = createAction(
  '[Auth] set username  ',
  props<{ userName: string ,friendlyName:string}>()
);


export const loadAuthsFailure = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);
