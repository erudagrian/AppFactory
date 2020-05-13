import { ModuleWithProviders, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/nx';

import { UiModule } from '@appFactory/ui';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    UiModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule,
    StoreModule,
    EffectsModule,
    UiModule
  ]
})
export class ShellModule {
  static forRoot(): ModuleWithProviders<ShellModule> {
    return {
      ngModule: ShellModule,
    };
  }
}
