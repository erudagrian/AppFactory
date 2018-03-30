import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MoleskineNotebookComponent } from './moleskine-notebook/moleskine-notebook.component';
import { PaperSheetComponent } from './paper-sheet/paper-sheet.component';
import { DeskComponent } from './desk/desk.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DeskComponent,
    MoleskineNotebookComponent,
    PaperSheetComponent,
  ],
  exports: [
    DeskComponent,
    MoleskineNotebookComponent,
    PaperSheetComponent
  ]
})
export class UiModule {}
