import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PresupuestoService {

  presURL = 'https://manolita-d893f.firebaseio.com/presupuestos.json';

  constructor(private http: Http) { }

  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);//convierte parametro en una cadena
    const headers = new Headers({
      'ContentType': 'application/json'
    });
    
    return this.http.post( this.presURL, newpres, {headers})
      .map( res  => {
        console.log( res.json());
        return res.json();
      })

  }

  getPresupuestos() {
    return this.http.get( this.presURL)
      .map(
        res => res.json()
      )
  }



}
