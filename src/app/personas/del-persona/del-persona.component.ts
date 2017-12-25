import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-del-persona',
  templateUrl: './del-persona.component.html',
  styleUrls: ['./del-persona.component.css']
})
export class DelPersonaComponent implements OnInit {

  constructor() { }

  confirmar() {
    var answer = confirm("¿ Estas seguro de eliminar a este usuario?");
    
    if ( answer ) {
      //lo deberia borrar conquery
    } else {
      //voy a administracion segun mockup
    }
  }

  ngOnInit() {
  }

}
