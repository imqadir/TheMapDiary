import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatabaseEntry } from './../../database-entry';
import { Position } from './../../position';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  item: any;
  posArray: Position[] = [];

  constructor(public afdb: AngularFireDatabase) {}

  getAllDataItems(){
    return this.afdb.list('/mapDataItems/');
  }

  addDataItem(data: DatabaseEntry){
    this.afdb.list('/mapDataItems/').push(data);
  }


  removeDataEntry(id){
    this.afdb.list('/mapDataItems/').remove(id);
  }

  catchDataItem(item: any){
    this.item = item;
  }

  returnDataItem(){
    return this.item;
  }

/*
  mkFirePosArray(pos: Position){
    this.posArray.push(pos);
  }

  returnFirePosArray(){
    return this.posArray;
  }
  */
}
