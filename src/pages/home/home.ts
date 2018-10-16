import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { SmartPage } from '../smart/smart';
import { LampPage } from '../lamp/lamp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  boc = BocinaPage;
  tele = TvPage;
  phone = SmartPage;
  lam = LampPage;

  constructor(public navCtrl: NavController) {

  }

  bocina()
  {
   this.navCtrl.push(this.boc);
  }

  tv()
  {
    this.navCtrl.push(this.tele);
  }

  smart()
  {
    this.navCtrl.push(this.phone);
  }

  lamp()
  {
    this.navCtrl.push(this.lam);
  }
}
