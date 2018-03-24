import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperSheetComponent } from './paper-sheet.component';

describe('PaperSheetComponent', () => {
  let component: PaperSheetComponent;
  let fixture: ComponentFixture<PaperSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
