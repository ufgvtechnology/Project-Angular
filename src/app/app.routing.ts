import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";


//Importa componentes para pagina exclusiva
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import {ErrorComponent} from "./components/error/error.component";



//Array de Rutas

const appRoutes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    //Ruta sin parametro
    { path: 'blog', component: BlogComponent },
    //Misma ruta con parametros
    { path: 'blog/:parametro1/:parametro2', component: BlogComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: '**', component: ErrorComponent }

];

//Exportar el módulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);