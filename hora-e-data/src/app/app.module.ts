import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { HoraComponent } from './card/hora/hora.component';
import { DataComponent } from './card/data/data.component';
import { RouterModule } from '@angular/router';

import routes from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    HoraComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
