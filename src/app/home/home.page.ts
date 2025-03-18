import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  valorRange = 0;
  gorjeta = 0;
  valorConta = 0;
  valorTotalConta = 0;
  convertido = 0;

  tipoMedida = "";
  quilometros = 0;

  // onIonChange(ev:RangeCustomEvent){
  //   this.valorRange = parseInt(ev.detail.value.toString());
  // }

  calcularGorjeta(ev:RangeCustomEvent){
    this.valorRange = Number(ev.detail.value.toString())/100;
    this.gorjeta = Math.round(Number(this.valorRange*this.valorConta));
    this.valorTotalConta = Number(this.gorjeta + this.valorConta);
  }

  converterMedidas(ev:RangeCustomEvent){
    this.valorRange = Number(ev.detail.value.toString());

    if(this.tipoMedida === "quilometros"){
      this.convertido = Number(this.valorRange)*1000;
    }else{
      
    }
  }

}
