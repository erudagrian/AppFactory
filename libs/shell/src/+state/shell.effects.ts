import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ForwardCommand, GoCommand, ShellActionTypes } from './shell.actions';

@Injectable()
export class ShellEffects {
  @Effect({ dispatch: false })
  public navigate$ = this._actions$
    .ofType(ShellActionTypes.GO_COMMAND)
    .map((action: GoCommand) => action.payload)
    .do(({ path, query: queryParams, extras }) => this._router.navigate(path, { queryParams, ...extras }));

  @Effect({ dispatch: false })
  public navigateBack$ = this._actions$.ofType(ShellActionTypes.BACK_COMMAND).do(() => this._location.back());

  @Effect({ dispatch: false })
  public navigateForward$ = this._actions$.ofType(ShellActionTypes.FORWARD_COMMAND).do(() => this._location.forward());

  constructor(private _actions$: Actions, private _router: Router, private _location: Location) {}
}
