import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidesComponent } from './guides/guides.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GuidesComponent,
    data: {
      title: 'Guías'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidePagesRoutingModule {}