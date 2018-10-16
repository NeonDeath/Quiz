import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmartPage } from './smart';

@NgModule({
  declarations: [
    SmartPage,
  ],
  imports: [
    IonicPageModule.forChild(SmartPage),
  ],
})
export class SmartPageModule {}
