import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: [
    './data.component.css',
    '../card.component.css'
  ]
})
export class DataComponent implements OnInit {

  agora = new Date();

  dia = this.addZero(this.agora.getDay());
  mes = this.addZero(this.agora.getMonth());
  ano = this.addZero(this.agora.getFullYear());

  data = this.dia + "/" + this.mes + "/" + this.ano

  constructor() { }

  ngOnInit(): void {
  }

  addZero(data: Number) { return data < 10 ? "0"+data : data }

}
