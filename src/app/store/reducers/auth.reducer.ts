import { createReducer, on } from '@ngrx/store';
import { setAuth, loadAuths } from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  userName?: string;
  friendlyName?: string;
}

export const initialState: State = {
  userName: '',
  friendlyName: '',
};

export const reducer = createReducer(
  initialState,
  on(setAuth, (state, action: State) => ({
    ...state,
    userName: action.userName,
    friendlyName: action.friendlyName,
  })),
  // on(loadAuths, (state) => ({ ...state }))
);

export const getUserName = (state: State) => state.userName;
export const getFriendlyName = (state: State) => state.friendlyName;
