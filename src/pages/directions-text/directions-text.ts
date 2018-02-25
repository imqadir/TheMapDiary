import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PositionServiceProvider } from './../../providers/position-service/position-service';
import { Position } from './../../position';

/**
 * Generated class for the DirectionsTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-directions-text',
  templateUrl: 'directions-text.html',
})
export class DirectionsTextPage {

    positionsArr: Position[] = [];
    directionsService = new google.maps.DirectionsService;
    stepsNum: number = 0;
    stepsStringArr: string[] = [];
    currentStep: string = '';
    currentStepDistance: string = '';
    currentStepDuration: string = '';
    currentStepInstructions: string = '';
    stepsCount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public positionService: PositionServiceProvider) {}

  ionViewDidLoad() {
    this.positionsArr = this.positionService.returnPositionArray();
    this.findDirections();
  }
  findDirections() {
    this.directionsService.route({
      origin: this.positionsArr[0],
      destination: this.positionsArr[1],
      travelMode: 'DRIVING'
      }, (response, status) => {
      if (status === 'OK') {
        this.stepsNum = response.routes[0].legs[0].steps.length;
        for(var i=0; i<response.routes[0].legs[0].steps.length; i++){
          this.stepsCount = this.stepsCount + 1;
          this.currentStepDistance = response.routes[0].legs[0].steps[i].distance.text;
          this.currentStepDuration = response.routes[0].legs[0].steps[i].duration.text;
          this.currentStepInstructions = response.routes[0].legs[0].steps[i].maneuver;
          this.currentStep = 'Step ' + this.stepsCount + ' is ' + this.currentStepDistance + ' long. It will take approximately ' + this.currentStepDuration + ' to complete. These instructions may be helpful ' + this.currentStepInstructions + '.';
          this.stepsStringArr.push(this.currentStep);
        }
        this.stepsCount = 0;
      } else {
      window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
