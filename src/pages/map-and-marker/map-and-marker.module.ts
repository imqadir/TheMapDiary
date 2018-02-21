import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapAndMarkerPage } from './map-and-marker';

@NgModule({
  declarations: [
    MapAndMarkerPage,
  ],
  imports: [
    IonicPageModule.forChild(MapAndMarkerPage),
  ],
})
export class MapAndMarkerPageModule {}
