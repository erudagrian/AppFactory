import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // loadChildren: '@appFactory/guide-pages#GuidePagesModule',
    redirectTo: 'guides',
  },
  {
    path: 'guides',
    loadChildren: '@appFactory/guide-pages#GuidePagesModule',
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadChildren: '@appFactory/guide-pages#GuidePagesModule'
  // }
  //   {
  //     path: '',
  //     redirectTo: 'programs',
  //     pathMatch: 'full',
  //   },
  //   {
  //     path: 'programs',
  //     loadChildren: '@shin/admin-pages#AdminPagesModule',
  //   },
  //   {
  //     path: 'programs',
  //     loadChildren: '@shin/admin-pages#AdminPagesModule',
  //   },
  //   {
  //     path: 'auth',
  //     loadChildren: '@shin/auth#AuthModule',
  //   },
  //   {
  //     path: '',
  //     loadChildren: '@shin/not-found#NotFoundModule'
  //   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
