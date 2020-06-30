import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Movie } from '../models/movie';

@Injectable()

export class MovieService{

    constructor(
        private _http: HttpClient
    ){}

    


}