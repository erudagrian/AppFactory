import { Component, Input } from '@angular/core';

@Component({
  selector: 'moleskine-notebook',
  templateUrl: './moleskine-notebook.component.html',
  styleUrls: ['./moleskine-notebook.component.scss']
})
export class MoleskineNotebookComponent {

  @Input() title: string;
  @Input() color: string;
  @Input() pageStyle: string;

  constructor() { }
}
