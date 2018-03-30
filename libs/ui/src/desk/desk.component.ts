import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss']
})
export class DeskComponent implements OnChanges {
  @Input() title: string; 
  @Input() guides: any; 
  @Input() templates: any; 
 
  public deskGuides: any[] = [];
  public deskTemplates: any[];

  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes.guides && changes.guides.currentValue && changes.guides.currentValue.length) {
      this.deskGuides = changes.guides.currentValue;
    }
    if(changes.templates && changes.templates.currentValue && changes.templates.currentValue.length) {
      this.deskTemplates = changes.templates.currentValue;
    }
  }

}
