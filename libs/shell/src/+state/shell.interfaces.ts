import { Params } from '@angular/router';

import { RouterReducerState } from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
  root: {
    children: any;
    routeConfig: any;
  };
}

export interface ShellState {
  routerReducer: RouterReducerState<RouterStateUrl>;
}
