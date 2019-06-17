import * as fromLayout from '@core/reducers/layout.reducer';
import * as fromRouter from '@ngrx/router-store';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap, Action, ActionReducer, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface State {
  layout: fromLayout.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    layout: fromLayout.reducer,
    router: fromRouter.routerReducer
  })
});

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('previous state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  }
}

export const metaReducers: MetaReducer<State>[] = 
  !environment.production ? [logger] : [];

export const getLayoutState = createFeatureSelector<State, fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
)