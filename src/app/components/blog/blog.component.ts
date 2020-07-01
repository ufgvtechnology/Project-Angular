import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public parametro1: string;
  public parametro2: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {

      //console.log(params);
      this.parametro1 = params.parametro1;
      this.parametro2 = params.parametro2;

    });

  }
  redireccion(){
    //alert("Alerta");
    this._router.navigate(['/formulario']);
  }

}
