import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Position } from './../../position';
import { PositionServiceProvider } from './../../providers/position-service/position-service';

/**
 * Generated class for the TwopointsdirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-twopointsdirection',
  templateUrl: 'twopointsdirection.html',
})
export class TwopointsdirectionPage {

  startPointText: string = '';
  endPointText: string = '';
  apiKey:string = 'AIzaSyA3s9I9UoqZUT6-Q2pJ-hBnvYVhpoDYJdY';
  startPointPos: Position;
  endPointPos: Position;
  startPointStatus: string = '';
  endPointStatus: string = '';
  startPointLat: number;
  startPointLng: number;
  endPointLat: number;
  endPointLng: number;
  posArray: Position[] = [];
  distanceMatrixStatus: string = '';
  distanceString: string = '';
  array: Position[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private httpClient: HttpClient, public positionService: PositionServiceProvider) {
  }

  ionViewDidLoad() {
  }

  getDistance(){
    this.getStartPointLatLng(this.startPointText);
    this.getEndPointLatLng(this.endPointText);
    this.servePosArray();
    this.calculateDistance();
  }

  getStartPointLatLng(address: string){
    this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ address + '&key=' + this.apiKey)
    .subscribe(
      (data:any) => {
      this.startPointStatus = data.status;
      this.startPointLat = data.results[0].geometry.location.lat;
      this.startPointLng = data.results[0].geometry.location.lng;
      this.startPointPos = {
        lat: this.startPointLat,
        lng: this.startPointLng
      };
      this.posArray.push(this.startPointPos);
    });
  }

  getEndPointLatLng(address: string){
    this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ address + '&key=' + this.apiKey)
    .subscribe(
      (data:any) => {
      this.endPointStatus = data.status;
      this.endPointLat = data.results[0].geometry.location.lat;
      this.endPointLng = data.results[0].geometry.location.lng;
      this.endPointPos = {
        lat: this.endPointLat,
        lng: this.endPointLng
      };
      this.posArray.push(this.endPointPos);
    });
  }

  servePosArray(){
    this.positionService.catchPositionArray(this.posArray);
  }

  calculateDistance(){
    this.array = this.positionService.returnPositionArray();
    new google.maps.DistanceMatrixService().getDistanceMatrix({
      origins: [this.startPointText],
      destinations: [this.endPointText],
      travelMode: 'DRIVING'
    },(response, status) => {
      this.distanceMatrixStatus = status;
      this.distanceString = response.rows[0].elements[0].distance.text;
    });
  }

}
