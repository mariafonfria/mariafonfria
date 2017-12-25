import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  das: string;

  password: string;
  

  constructor() { }

  dasCorrecto () {
    var respuesta = false;
    if( this.das.length > 0 ){
      var letra = this.das.charAt(0);
      var aNum = parseInt(letra);
      if ( isNaN( aNum) ){
        if( !this.esEspecial(letra) ) {
          //faltaria ver si los demas son numeros y suman x cifras en total
          respuesta = true;
        }
      }
    }
      return respuesta;
    
  }

  esEspecial( caracter ) {
    var especiales = " /_*-+.<>()!·$%&\|;:¨´{}[]^`¡?¿=";//incluir si falta alguno
    var respuesta = false;
    for ( var i = 0; i < especiales.length; i++){
      if ( caracter == especiales.charAt(i) ) {
        respuesta = true;
        break;
      }
    }
    return respuesta;
  }

  passwordCorrecta () { //de momento sea de 8 caracteres
    var correcto = false;
    var pass = "" + this.password;//no se sii hace falta
    alert("pass" + pass);
    alert("passlength " + pass.length);
    alert("hhis lengt " + this.password.length);
    if ( pass.length > 7 ) {

      correcto = true;
    }

    return correcto;
  }

  validado () {
    var respuesta = false;
    if ( this.dasCorrecto() && this.passwordCorrecta()  ) {
      respuesta = true;
    }
    alert( "validado es " + respuesta);
    return respuesta;
  }

  ngOnInit() {
  }

}
