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

  dia = (this.agora.getDate()).toString().padStart(2, "0");
  mes = (this.agora.getMonth() + 1).toString().padStart(2, "0");
  ano = this.agora.getFullYear();

  data = this.dia + "/" + this.mes + "/" + this.ano

  constructor() { }

  ngOnInit(): void {
  }

}
