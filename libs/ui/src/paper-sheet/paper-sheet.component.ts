import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'paper-sheet',
  templateUrl: './paper-sheet.component.html',
  styleUrls: ['./paper-sheet.component.scss']
})
export class PaperSheetComponent implements OnInit {
  
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
