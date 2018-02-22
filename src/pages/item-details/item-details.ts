import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';

/**
 * Generated class for the ItemDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {

  address: string = '';
  latitude: number = 0;
  longitude: number = 0;
  info: string = '';
  item: any;
  pic: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public firebaseService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    this.item = this.firebaseService.returnDataItem();
    this.address = this.item.address;
    this.latitude = this.item.lat;
    this.longitude = this.item.lng;
    this.info = this.item.detail;
    this.pic = this.item.picture;

  }

}
