import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataComponent } from './card/data/data.component';
import { HoraComponent } from './card/hora/hora.component';

const routes: Routes = [
  {
    path: "data",
    component: DataComponent,
  },
  {
    path: "hora",
    component: HoraComponent
  }
];

export default routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
