import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { MyApp } from './app.component';
import { PositionServiceProvider } from '../providers/position-service/position-service';
import { GeolocationServiceProvider } from '../providers/geolocation-service/geolocation-service';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

var firebaseConfig = {
    apiKey: "AIzaSyAvz248qTF4u5v1SKZKwHJ_OzihG7C7EaY",
    authDomain: "the-map-diary.firebaseapp.com",
    databaseURL: "https://the-map-diary.firebaseio.com",
    projectId: "the-map-diary",
    storageBucket: "the-map-diary.appspot.com",
    messagingSenderId: "272439300563"
  };

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PositionServiceProvider,
    GeolocationServiceProvider,
    FirebaseServiceProvider
  ]
})
export class AppModule {}
