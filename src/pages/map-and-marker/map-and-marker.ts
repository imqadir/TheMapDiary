import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Position } from './../../position';
import { PositionServiceProvider } from './../../providers/position-service/position-service';

/**
 * Generated class for the MapAndMarkerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;


@IonicPage()
@Component({
  selector: 'page-map-and-marker',
  templateUrl: 'map-and-marker.html',
})
export class MapAndMarkerPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker: any;
  pos: Position;
  latitude: number;
  longitude: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public positionService: PositionServiceProvider) {
    this.pos = this.positionService.returnPosition();
  }

  ionViewDidLoad() {
    this.loadMap();
    this.placeMarker();
  }

  loadMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: this.pos,
    });
  }
  placeMarker(){
    new google.maps.Marker({
      position: this.pos,
      map: this.map
    });
  }

}
