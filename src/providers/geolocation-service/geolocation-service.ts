import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Position } from './../../position';

/*
  Generated class for the GeolocationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeolocationServiceProvider {

  geoLoc: Position;

  constructor(public http: HttpClient) {}

  catchGeolocation(pos: Position){
      this.geoLoc = pos;
  }

  returnGeolocation(){
    return this.geoLoc;
  }

}
