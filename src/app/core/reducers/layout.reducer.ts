import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from '@core/actions';

export interface State {
  showSidenav: boolean;  
}

const initialState: State = {
  showSidenav: false
};

export const reducer = createReducer(
  initialState,
  on(LayoutActions.closeSidenav, state => ({ showSidenav: false })),
  on(LayoutActions.openSidenav, state => ({ showSidenav: true })),
);

export const getShowSidenav = (state: State) => state.showSidenav;