import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from "@appFactory/ui";

import { GuidePagesRoutingModule } from './guide-pages-routing.module';
import { CoverComponent } from './cover/cover.component';
import { GuidesComponent } from './guides/guides.component';
import { StructureComponent } from './structure/structure.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { guidesReducer, templatesReducer } from './+state/guides.reducer';
import { guidesInitialState, templatesInitialState } from './+state/guides.init';
import { GuidesEffects } from './+state/guides.effects';

@NgModule({
  imports: [
    CommonModule,
    GuidePagesRoutingModule,
    UiModule,
    StoreModule.forFeature('guides', guidesReducer, {initialState: guidesInitialState}),
    EffectsModule.forFeature([GuidesEffects]),
    StoreModule.forFeature('templates', templatesReducer, {initialState: templatesInitialState}),
  ],
  declarations: [
    CoverComponent,
    GuidesComponent,
    StructureComponent
  ],
  providers: [GuidesEffects]
})
export class GuidePagesModule {}
