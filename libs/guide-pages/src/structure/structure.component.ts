import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromGuides from '../+state';
@Component({
  selector: 'structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {

  public templates$: Observable<any>;
  constructor(private _store: Store<fromGuides.GuidesState>) { }

  ngOnInit() {
    this.templates$ = this._store.select(fromGuides.allTemplates);
  }

}
