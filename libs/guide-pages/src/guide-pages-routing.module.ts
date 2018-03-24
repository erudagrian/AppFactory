import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidesComponent } from './guides/guides.component';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GuidesComponent,
    data: {
      title: 'Guías'
    }
  },
  {
    path: 'structure',
    component: StructureComponent,
    data: {
      title: 'Estructura'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidePagesRoutingModule {}