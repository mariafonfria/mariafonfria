import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class PersonasService {

  presURL = 'https://manolita-46ffd.firebaseio.com/persona.json';

  constructor(private http: Http ) { }


  postPersona(persona: any) {
    const newpers = JSON.stringify(persona);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.presURL, newpers, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      });
  }
}
