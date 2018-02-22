import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';
import { DatabaseEntry } from './../../database-entry';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SavingOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saving-options',
  templateUrl: 'saving-options.html',
})
export class SavingOptionsPage {

  shoppingItems: FirebaseListObservable<any[]>;

  apiKey:string = 'AIzaSyA3s9I9UoqZUT6-Q2pJ-hBnvYVhpoDYJdY';
  entAddress: string = '';
  entDetail: string = '';
  latitude: number;
  longitude: number;
  dataItem: DatabaseEntry;


  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider, private httpClient: HttpClient) {}

  ionViewDidLoad() {}

  addToDatabase(){
    this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ this.entAddress + '&key=' + this.apiKey)
    .subscribe((data:any) => {
    this.latitude = data.results[0].geometry.location.lat;
    this.longitude = data.results[0].geometry.location.lng;
    this.dataItem = {address: this.entAddress,
      lat: this.latitude, lng:this.longitude, detail: this.entDetail};
    this.firebaseService.addDataItem(this.dataItem);
    });
  }
}
