import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PositionServiceProvider } from './../../providers/position-service/position-service';
import { Position } from './../../position';

/**
 * Generated class for the TwoPointsDistanceMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-two-points-distance-map',
  templateUrl: 'two-points-distance-map.html',
})
export class TwoPointsDistanceMapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  positionsArr: Position[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public positionService: PositionServiceProvider) {
    this.positionsArr = this.positionService.returnPositionArray();
  }

  ionViewDidLoad() {
    this.loadMap();
    this.placeMarkers();
  }

  loadMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 12,
      center: this.positionsArr[0],
    });
  }

  placeMarkers(){
    for(var i=0; i<this.positionsArr.length; i++){
      new google.maps.Marker({
        position: this.positionsArr[i],
        map: this.map
      });
    }
  }
}
