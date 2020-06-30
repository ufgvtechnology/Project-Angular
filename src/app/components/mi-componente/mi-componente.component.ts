import { Component} from '@angular/core';

@Component({

    selector: 'mi-componente',
    templateUrl:'./mi-componente.component.html'


})
export class MiComponente{
    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo= "Proyecto de Angular";
        this.comentario = "Aprendiendo angular";
        this.year=2020;
        console.log("Componente mi-componente cargado");
        //console.log(this.year,this.titulo,this.comentario);
    }
}