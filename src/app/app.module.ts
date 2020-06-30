import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {MiComponente} from './components/mi-componente/mi-componente.component';
import {PeliculasComponent } from './components/peliculas/peliculas.component';

//import { routing, appRoutingProviders} from './app.routing';
//import { FormsModule} from '@angular/forms';
//import {HttpClientModule} from '@angular/common/http';





//import { EsParPipe} from './pipes/espar.pipe';
 


@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    //HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
