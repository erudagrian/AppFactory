import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MoleskineNotebookComponent } from './moleskine-notebook/moleskine-notebook.component';
import { PaperSheetComponent } from './paper-sheet/paper-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MoleskineNotebookComponent,
    PaperSheetComponent
  ],
  exports: [
    MoleskineNotebookComponent,
    PaperSheetComponent
  ]
})
export class UiModule {}
