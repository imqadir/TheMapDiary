import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwoPointsDistanceMapPage } from './two-points-distance-map';

@NgModule({
  declarations: [
    TwoPointsDistanceMapPage,
  ],
  imports: [
    IonicPageModule.forChild(TwoPointsDistanceMapPage),
  ],
})
export class TwoPointsDistanceMapPageModule {}
