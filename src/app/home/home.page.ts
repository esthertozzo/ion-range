import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }
  valorRange = 0;
  gorjeta = 0;
  valorConta = 0;
  valorTotalConta = 0;
  convertido = "";

  valorRangeUM = 0;
  valorRangeKm = 0;
  valorRangeM = 0;
  tipoMedida = "";
  tipoMedidaConverter = "";
  quilometros = 0;
  milhas = 0;

  valorRangeAltura = 0;
  valorRangePeso = 0;
  valorIMC = 0;
<<<<<<< HEAD
  metros = 0;
  centimetros = 0;
  tipoAltura = "";
  tipoPeso = "";
=======
>>>>>>> c952c5ceb7375bb6570c4a00de6e9992271ff434

  // onIonChange(ev:RangeCustomEvent){
  //   this.valorRange = parseInt(ev.detail.value.toString());
  // }

  calcularGorjeta(ev: RangeCustomEvent) {
    this.valorRange = Number(ev.detail.value.toString()) / 100;
    this.gorjeta = (Number(this.valorRange * this.valorConta));
    this.valorTotalConta = Number(this.gorjeta + this.valorConta);
  }

  converterMedidas(ev: RangeCustomEvent) {
    this.valorRangeUM = Number(ev.detail.value.toString());
    if (this.tipoMedida === "quilometros" && this.tipoMedidaConverter === "milhas") {
      this.valorRangeKm = Number(ev.detail.value.toString()) * 1000;
      this.convertido = (Number(this.valorRangeUM) / 1.609).toFixed(2);
    }if(this.tipoMedida === "quilometros" && this.tipoMedidaConverter === "pes"){
      this.valorRangeKm = Number(ev.detail.value.toString()) * 1000;
      this.convertido = (Number(this.valorRangeUM) * 3281).toFixed(2);
    }if(this.tipoMedida === "metros" && this.tipoMedidaConverter === "milhas"){
      this.valorRangeM = Number(ev.detail.value.toString());
      this.convertido = (Number(this.valorRangeUM) / 1609).toFixed(2);
    }if(this.tipoMedida === "metros" && this.tipoMedidaConverter === "pes"){
      this.valorRangeM = Number(ev.detail.value.toString());
      this.convertido = (Number(this.valorRangeUM) * 3.281).toFixed(2);
    }
  }

  calcularIMC(ev: RangeCustomEvent){
<<<<<<< HEAD


    if(this.tipoAltura  === "metros" && this.tipoPeso ==="quilogramas"){
      this.valorRangeAltura = Number(ev.detail.value.toString());
      this.valorRangePeso = Number(ev.detail.value.toString());
      this.valorIMC = this.valorRangePeso/ (this.valorRangeAltura*this.valorRangeAltura);
    }
=======
    this.valorRangeAltura = Number(ev.detail.value.toString())/ 100;
    this.valorRangePeso = Number(ev.detail.value.toString());

    this.valorIMC = this.valorRangePeso/ (this.valorRangeAltura*this.valorRangeAltura);
>>>>>>> c952c5ceb7375bb6570c4a00de6e9992271ff434


  }

}
