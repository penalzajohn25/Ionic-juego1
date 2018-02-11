import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   mayorMenor:string='...';
   num:number;
   menPlace="Introdusca un numero del 1 al 100";
   numberSecret:number=this.numeroAleatorio(0,100);

  constructor(public navCtrl: NavController) {
     
  }

  numeroAleatorio(a,b){
    return Math.round(Math.random() * (b-a)+parseInt(a));
  }
  
  compruebaNumero(){
    if(this.num){

      if(this.num < this.numberSecret)
         this.mayorMenor='menor';
      else if(this.num > this.numberSecret)
         this.mayorMenor='mayor';
      else
         this.mayorMenor='igual';

    }
  }
 
  reiniciar(){
    this.mayorMenor='...';
  }

}
