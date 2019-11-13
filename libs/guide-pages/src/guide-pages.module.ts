import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from "@appFactory/ui";

import { GuidePagesRoutingModule } from './guide-pages-routing.module';
import { CoverComponent } from './cover/cover.component';
import { GuidesComponent } from './guides/guides.component';
import { StructureComponent } from './structure/structure.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    GuidePagesRoutingModule,
    UiModule
  ],
  declarations: [
    CoverComponent,
    GuidesComponent,
    StructureComponent
  ],
})
export class GuidePagesModule {}
