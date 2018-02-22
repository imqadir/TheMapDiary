import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';
import { DatabaseEntry } from './../../database-entry';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Position } from './../../position';

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

  apiKey:string = 'AIzaSyA3s9I9UoqZUT6-Q2pJ-hBnvYVhpoDYJdY';
  entAddress: string = '';
  entDetail: string = '';
  latitude: number;
  longitude: number;
  dataItem: DatabaseEntry;
  result: any;
  image: any;
  pos: Position;


  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider, private httpClient: HttpClient, private camera: Camera) {}

  ionViewDidLoad() {}

  async takePicture(){
    try{
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

      this.result = await this.camera.getPicture(options);
      this.image = `data:image/jpeg;base64,${this.result}`;
    }
    catch(e){
      console.log(e);
    }

  }

  addToDatabase(){
    this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ this.entAddress + '&key=' + this.apiKey)
    .subscribe((data:any) => {
    this.latitude = data.results[0].geometry.location.lat;
    this.longitude = data.results[0].geometry.location.lng;
    this.dataItem = {address: this.entAddress,
      lat: this.latitude, lng:this.longitude, detail: this.entDetail, picture: this.image};
    this.pos = {lat:this.latitude, lng:this.longitude};
    this.firebaseService.addDataItem(this.dataItem);
    this.firebaseService.mkFirePosArray(this.pos);
    });
  }
}
