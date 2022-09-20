import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: [
    './hora.component.css',
    '../card.component.css'
  ]
})
export class HoraComponent implements OnInit {

  agora = new Date();

  hora = this.pegaHora()

  constructor() { }

  ngOnInit(): void {
    this.intervalo()
  }

  intervalo() {
    setInterval(() => {
      this.agora = new Date;
      this.hora = this.pegaHora()
    }, 1000);
  }

  pegaHora() {
    let hrs = this.addZero(this.agora.getHours());
    let min = this.addZero(this.agora.getMinutes());
    let seg = this.addZero(this.agora.getSeconds());

    return hrs + ":" + min + ":" + seg
  }

  addZero(data: Number) { return data < 10 ? "0"+data : data }

}
