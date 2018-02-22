import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Position } from './../../position';


/*
  Generated class for the PositionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PositionServiceProvider {

  pos: Position;
  arrPos: Position[] = [];

  constructor(public http: HttpClient) {
  }

  catchPosition(pos: Position){
    this.pos = pos;
  }
  returnPosition(){
    return this.pos;
  }
  catchPositionArray(arr: Position[]){
    this.arrPos = arr;
  }
  returnPositionArray(){
    return this.arrPos;
  }


}
