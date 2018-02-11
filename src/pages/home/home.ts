import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   mayorMenor:string='...';
   num:number;
   menPlace="Introdusca un numero del 1 al 10";
   numberSecret:number=this.numeroAleatorio(0,10);
   intentos = 10;
  constructor(public navCtrl: NavController) {
     
  }

  numeroAleatorio(a,b){
    return Math.round(Math.random() * (b-a)+parseInt(a));
  }
  
  compruebaNumero(){
    if(this.num){
      if(this.num < this.numberSecret){
        this.intentos=this.intentos-1;
        this.mayorMenor='menor';
      }else if(this.num > this.numberSecret){
        this.intentos=this.intentos-1;
        this.mayorMenor='mayor';
      }else{
        this.mayorMenor='igual';
        (this.intentos<10)?this.intentos:this.intentos+1;
      }
    }
  }
 
  reiniciar(){
    this.mayorMenor='...';
    this.intentos=10;
    this.numberSecret=this.numeroAleatorio(0,10);
    this.num=0;
  }

}
