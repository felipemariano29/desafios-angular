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
    let hrs = (this.agora.getHours()).toString().padStart(2, "0");
    let min = (this.agora.getMinutes().toString().padStart(2, "0"));
    let seg = (this.agora.getSeconds().toString().padStart(2, "0"));

    return hrs + ":" + min + ":" + seg
  }
}
