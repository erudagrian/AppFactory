import { ModuleWithProviders, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { NxModule } from '@nrwl/nx';

import { ShellEffects } from './+state/shell.effects';
import { CustomSerializer } from './+state/shell.init';
import { reducers } from './+state/shell.reducer';

import { UiModule } from '@appFactory/ui';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ShellEffects]),
    StoreRouterConnectingModule.forRoot(),
    UiModule
  ],
  exports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    NxModule, 
    StoreModule, 
    EffectsModule, 
    StoreRouterConnectingModule,
    UiModule
  ]
})
export class ShellModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShellModule,
      providers: [ShellEffects, { provide: RouterStateSerializer, useClass: CustomSerializer }]
    };
  }
}
