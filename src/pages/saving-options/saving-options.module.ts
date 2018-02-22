import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavingOptionsPage } from './saving-options';

@NgModule({
  declarations: [
    SavingOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SavingOptionsPage),
  ],
})
export class SavingOptionsPageModule {}
