import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { ShellState } from './shell.interfaces';

export const reducers: ActionReducerMap<ShellState> = {
  routerReducer: routerReducer
};
