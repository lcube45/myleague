import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAiBN988fGODb9y1fWcPNK0KoSbcI2mr9Y",
    authDomain: "fir-backend-72948.firebaseapp.com",
    databaseURL: "https://fir-backend-72948.firebaseio.com",
    storageBucket: "fir-backend-72948.appspot.com",
    messagingSenderId: "751412570588"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
