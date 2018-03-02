import { RouterStateSnapshot } from '@angular/router';

import { RouterStateSerializer } from '@ngrx/router-store';

import { RouterStateUrl } from './shell.interfaces';
import { createFeatureSelector } from '@ngrx/store';

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url } = routerState;
    const { queryParams } = routerState.root;
    const { children, params, routeConfig } = route;

    return { url, params, queryParams, root: { children, routeConfig } };
  }
}

// Memoized selectors
export const selectRouterReducer = createFeatureSelector('routerReducer');
