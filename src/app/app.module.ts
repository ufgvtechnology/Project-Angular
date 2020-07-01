import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';

import {AppComponent} from './app.component';
import {MiComponente} from './components/mi-componente/mi-componente.component';
import {PeliculasComponent } from './components/peliculas/peliculas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';

//import { FormsModule} from '@angular/forms';
//import {HttpClientModule} from '@angular/common/http';





//import { EsParPipe} from './pipes/espar.pipe';
 


@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    BlogComponent,
    HomeComponent,
    FormularioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
    //FormsModule,
    //HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
