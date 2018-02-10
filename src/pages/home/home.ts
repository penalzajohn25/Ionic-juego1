import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
 

  constructor(public navCtrl: NavController) {
     let menPlace:string="Introdusca un numero del 1 al 100";
  }

}
