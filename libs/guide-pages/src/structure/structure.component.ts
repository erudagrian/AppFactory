import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {

  public templates$: Observable<any>;
  constructor() { }

  ngOnInit() {
  }

}
