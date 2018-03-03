import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './cover/cover.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CoverComponent,
    data: {
      title: 'Cover'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidePagesRoutingModule {}