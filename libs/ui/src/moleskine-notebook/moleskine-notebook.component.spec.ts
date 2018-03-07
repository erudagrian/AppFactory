import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleskineNotebookComponent } from './moleskine-notebook.component';

describe('MoleskineNotebookComponent', () => {
  let component: MoleskineNotebookComponent;
  let fixture: ComponentFixture<MoleskineNotebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoleskineNotebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleskineNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
