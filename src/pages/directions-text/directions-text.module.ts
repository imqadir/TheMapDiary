import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectionsTextPage } from './directions-text';

@NgModule({
  declarations: [
    DirectionsTextPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectionsTextPage),
  ],
})
export class DirectionsTextPageModule {}
