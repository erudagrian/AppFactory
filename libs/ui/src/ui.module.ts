import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MoleskineNotebookComponent } from './moleskine-notebook/moleskine-notebook.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MoleskineNotebookComponent
  ],
  exports: [
    MoleskineNotebookComponent
  ]
})
export class UiModule {}
