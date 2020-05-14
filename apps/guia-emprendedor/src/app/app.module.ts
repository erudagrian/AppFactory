import { NgModule } from '@angular/core';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { ShellModule } from '@appFactory/shell';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    ShellModule.forRoot(),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({}, {})
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
