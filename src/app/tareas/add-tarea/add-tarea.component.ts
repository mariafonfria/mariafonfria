import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {  PresupuestoService } from '../../servicios/presupuesto.service';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css']
})
export class AddTareaComponent implements OnInit {
  presupuestoForm: FormGroup;
  presupuesto: any;

  constructor(private pf: FormBuilder, private presupuestoService: PresupuestoService) { }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      nombre: '',
      descripcion: '',
      visible: ''
    });
  }

  onSubmit(){
    alert("dentro submit");
    this.presupuesto = this.savePresupuesto();
    this.presupuestoService.postPresupuesto( this.presupuesto ).subscribe(newpres => {} )
  }

  savePresupuesto()  {
    alert("dentro save");
    const savePresupuesto2 = {
      nombre: this.presupuestoForm.get('nombre').value,
      descripcion: this.presupuestoForm.get('descripcion').value,
      visible: this.presupuestoForm.get('visible').value
    }
    return savePresupuesto2;
  }

}
