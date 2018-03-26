import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from "@angular/router";

import { Store } from "@ngrx/store";
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { AngularFirestore } from "angularfire2/firestore";
import { map, mergeMap, take, switchMap } from "rxjs/operators";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concat';

import { GuidesState, Template } from './guides.interfaces';
import { GuidesActionTypes } from './guides.actions';
import { StructureComponent } from '../structure/structure.component';

@Injectable()
export class GuidesEffects {
  
  @Effect()
  public navigateStructurePage$ = this._dataPersistence.navigation(StructureComponent, {
    run: (activatedRouteSnapshot: ActivatedRouteSnapshot, state: GuidesState) => {
      const templatesCollection = this._afs.collection<Template>('templates');

      return templatesCollection
        .snapshotChanges()
        .pipe(
          take(1),
          map(actions => {
            const templates = actions.map(action => {
              const { doc } = action.payload;

              return { id: doc.id, ...doc.data() };
            });

            return { type: GuidesActionTypes.TEMPLATES_DOCUMENT, payload: templates };
          })
        );
    },

    onError: (activatedRouteSnapshot: ActivatedRouteSnapshot, error: any) => {

    }
  });

  constructor(
    private _actions: Actions,
    private _afs: AngularFirestore,
    private _store: Store<any>,
    private _dataPersistence: DataPersistence<GuidesState>,
  ) {}
}