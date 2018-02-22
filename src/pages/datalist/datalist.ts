import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';

/**
 * Generated class for the DatalistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datalist',
  templateUrl: 'datalist.html',
})
export class DatalistPage {

  dataItemsList: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
    this.dataItemsList = this.firebaseService.getAllDataItems();
  }

  ionViewDidLoad() {}

  removeDataEntry(id){
    this.firebaseService.removeDataEntry(id);
  }
  provideEntryDetail(item){
    this.firebaseService.catchDataItem(item);
  }
}
