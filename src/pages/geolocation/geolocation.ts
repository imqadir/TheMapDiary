import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocationServiceProvider } from './../../providers/geolocation-service/geolocation-service';
import { Position } from './../../position';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  latitude: number = 0;
  longitude: number = 0;
  status: string = '';
  geoLoc: Position;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, public geolocationService: GeolocationServiceProvider, public platform: Platform) {
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition({timeout: 10000}).then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.geoLoc = {
        lat: this.latitude,
        lng: this.longitude
      };
      this.geolocationService.catchGeolocation(this.geoLoc);
      }).catch((error) => {
        this.status = 'error getting the location ' + error.message;
      });
    });
  }
}
