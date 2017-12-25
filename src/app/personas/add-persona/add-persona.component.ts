import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
//import { PersonasService } from '../../servicios/personas.service';
@Component({
  selector: 'app-add-personas',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {


  personasForm: FormGroup;
  persona: any;
  DAS: any;
  nombre: any;
  apellido: any;
  postal: any;
  password: any;


  constructor(private pf: FormBuilder) { }

  ngOnInit() {
     this.personasForm = this.pf.group({
       das: '',
       nombre: '',
       apellido: '',
       cp: '',
       password: ''
     });
  }
  onSubmit(){
    this.persona = this.savePersona();
    //this.personaService.postPersona(this.persona)
      //.subscribe(newpers => {

      //});
  }
  savePersona(){

  }
}
