import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { PersonasService } from '../../servicios/personas.service';
@Component({
  selector: 'app-add-personas',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {


  personasForm: FormGroup;
  persona: any;
  das: any;
  nombre: any;
  apellido: any;
  cp: any;
  password: any;


  constructor(private pf: FormBuilder, 
              private personaService: PersonasService ) { }

  ngOnInit() {
     this.personasForm = this.pf.group({
       das: '',
       nombre: '',
       apellido: '',
       cp: '',
       password: ''
     });
     this.onChanges();
  }
  onSubmit(){
    this.persona = this.savePersona();  
    this.personaService.postPersona(this.persona)
      .subscribe(newpers => {

      });
  }
  onChanges():void{
    this.personasForm.valueChanges.subscribe(valor =>{
      this.das = valor.das;
      this.apellido = valor.apellido;
      this.cp = valor.cp;
      this.password = valor.password;
    });
  }
  savePersona(){
    const savePersona = {
      DAS: this.personasForm.get('das').value,
      Nombre: this.personasForm.get('nombre').value,
      Apellido: this.personasForm.get('apellido').value,
      Cp: this.personasForm.get('cp').value,
      Password: this.personasForm.get('password').value
    }
    return savePersona;
  }
}
