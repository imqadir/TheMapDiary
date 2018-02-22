import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeolacationMapPage } from './geolacation-map';

@NgModule({
  declarations: [
    GeolacationMapPage,
  ],
  imports: [
    IonicPageModule.forChild(GeolacationMapPage),
  ],
})
export class GeolacationMapPageModule {}
