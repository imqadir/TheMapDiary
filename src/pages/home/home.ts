import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MapAndMarkerPage } from './../map-and-marker/map-and-marker';
import { Position } from './../../position';
import { PositionServiceProvider } from './../../providers/position-service/position-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  address: string = '';
  apiKey:string = 'AIzaSyA3s9I9UoqZUT6-Q2pJ-hBnvYVhpoDYJdY';
  latitude: number = 0;
  longitude: number = 0;
  status: string = '';
  returnedPos:Position;

  constructor(public navCtrl: NavController, private httpClient: HttpClient,
  public positionService: PositionServiceProvider) {}

  geocodeAddress(){
    this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ this.address + '&key=' + this.apiKey)
    .subscribe(
      (data:any) => {
      this.status = data.status;
      this.latitude = data.results[0].geometry.location.lat;
      this.longitude = data.results[0].geometry.location.lng;
      this.positionService.catchPosition({ lat: this.latitude, lng: this.longitude });
    });
  }
}
