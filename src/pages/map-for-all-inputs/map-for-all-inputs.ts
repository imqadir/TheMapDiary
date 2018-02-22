import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Position } from './../../position';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';

/**
 * Generated class for the MapForAllInputsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-map-for-all-inputs',
  templateUrl: 'map-for-all-inputs.html',
})
export class MapForAllInputsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  positionsArr: Position[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
    this.positionsArr = this.firebaseService.returnFirePosArray();
  }

  ionViewDidLoad() {
    this.loadMap();
    this.placeMarkers();
  }

  loadMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
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
