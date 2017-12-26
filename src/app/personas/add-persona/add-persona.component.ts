import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { PersonasService } from '../../servicios/personas.service';
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
  status: any;
  password: any;


  constructor(private pf: FormBuilder,
              private personaService: PersonasService ) { }

  ngOnInit() {
     this.personasForm = this.pf.group({
       das: '',
       nombre: '',
       apellido: '',
       status: '',
       password: ''
     });
  }
  onSubmit() {
    this.persona = this.savePersona();
    this.personaService.postPersona(this.persona)
      .subscribe(newpers => {

      });
  }
  savePersona() {

    const savePersona = {

      persona: this.personasForm.get('persona').value,
      das: this.personasForm.get('das').value,
      nombre: this.personasForm.get('nombre').value,
      apellido: this.personasForm.get('apellido').value,
      status: this.personasForm.get('status').value,
      pasword: this.personasForm.get('pasword').value


    };
    return savePersona;
  }
}
