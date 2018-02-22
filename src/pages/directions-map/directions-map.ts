import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PositionServiceProvider } from './../../providers/position-service/position-service';
import { Position } from './../../position';

/**
 * Generated class for the DirectionsMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-directions-map',
  templateUrl: 'directions-map.html',
})
export class DirectionsMapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  positionsArr: Position[] = [];
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams, public positionService: PositionServiceProvider) {
    this.positionsArr = this.positionService.returnPositionArray();
  }

  ionViewDidLoad() {
    this.loadMap();
    this.placeMarkers();
    this.displayDirections();
  }

  loadMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: this.positionsArr[0],
    });
    this.directionsDisplay.setMap(this.map);
  }

  placeMarkers(){
    for(var i=0; i<this.positionsArr.length; i++){
      new google.maps.Marker({
        position: this.positionsArr[i],
        map: this.map
      });
    }
  }

  displayDirections() {
    this.directionsService.route({
      origin: this.positionsArr[0],
      destination: this.positionsArr[1],
      travelMode: 'DRIVING'
      }, (response, status) => {
      if (status === 'OK') {
      this.directionsDisplay.setDirections(response);
      } else {
      window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
