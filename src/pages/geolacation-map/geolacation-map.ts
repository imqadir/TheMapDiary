import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeolocationServiceProvider } from './../../providers/geolocation-service/geolocation-service';
import { Position } from './../../position';

/**
 * Generated class for the GeolacationMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-geolacation-map',
  templateUrl: 'geolacation-map.html',
})
export class GeolacationMapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker: any;
  geoLoc: Position;
  latitude: number;
  longitude: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocationService: GeolocationServiceProvider) {
    this.geoLoc = this.geolocationService.returnGeolocation();
  }

  ionViewDidLoad() {
    this.loadMap();
    this.placeMarker();
  }

  loadMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: this.geoLoc,
    });
  }
  placeMarker(){
    new google.maps.Marker({
      position: this.geoLoc,
      map: this.map
    });
  }

}
