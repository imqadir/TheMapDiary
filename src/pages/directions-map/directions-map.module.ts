import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectionsMapPage } from './directions-map';

@NgModule({
  declarations: [
    DirectionsMapPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectionsMapPage),
  ],
})
export class DirectionsMapPageModule {}
