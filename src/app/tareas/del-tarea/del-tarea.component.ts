import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../servicios/presupuesto.service';

@Component({
  selector: 'app-del-tarea',
  templateUrl: './del-tarea.component.html',
  styleUrls: ['./del-tarea.component.css']
})
export class DelTareaComponent implements OnInit {

  presupuestos: any[] = [];


  constructor( private presupuestoService: PresupuestoService ) { 
    this.presupuestoService.getPresupuestos()
      .subscribe( presupuestos => {
        for(const id$ in presupuestos ){
          const p = presupuestos[id$];
          p.id$ = id$;
          this.presupuestos.push(presupuestos[id$]);
        }
      })
  }

  ngOnInit() {
  }

}
