import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


// servicios
import { PersonasService } from './servicios/personas.service';
import {AutenticacionService} from './servicios/autenticacion.service';

// components
import {AddPersonaComponent} from './personas/add-persona/add-persona.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { LoginComponent } from './inicio/login/login.component';
import { UsuarioComponent } from './inicio/usuario/usuario.component';
import { CambiarPassComponent } from './inicio/cambiar-pass/cambiar-pass.component';
import { RecuperarPassComponent } from './inicio/recuperar-pass/recuperar-pass.component';
import { AddTareaComponent } from './tareas/add-tarea/add-tarea.component';
import { DelTareaComponent } from './tareas/del-tarea/del-tarea.component';
import { ModTareaComponent } from './tareas/mod-tarea/mod-tarea.component';
import { DelPersonaComponent } from './personas/del-persona/del-persona.component';
import { ModPersonaComponent } from './personas/mod-persona/mod-persona.component';
import { ErrorComponent } from './error/error.component';

import { GlobalNavBarComponent } from './global-nav-bar/global-nav-bar.component';

import { NavPersonaComponent } from './personas/nav-persona/nav-persona.component';
import { NavTareasComponent } from './tareas/nav-tareas/nav-tareas.component';



const routes: Routes = [
  { path: '', component: RegistroComponent },
  { path: 'usuario', component: UsuarioComponent},
  { path: 'addPersona', component: AddPersonaComponent},
  { path: 'delPersona', component: DelPersonaComponent},
  { path: 'modPersona', component: ModPersonaComponent},
  { path: 'recuperarPass', component: RecuperarPassComponent},
  { path: 'cambiarPass', component: CambiarPassComponent},
  { path: 'login', component: LoginComponent},
  { path: 'addTarea', component: AddTareaComponent},
  { path: 'delTarea', component: DelTareaComponent},
  { path: 'modTarea', component: ModTareaComponent},
  { path: '**', component: ErrorComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AddPersonaComponent,
    RegistroComponent,
    LoginComponent,
    UsuarioComponent,
    CambiarPassComponent,
    RecuperarPassComponent,
    AddTareaComponent,
    DelTareaComponent,
    ModTareaComponent,
    DelPersonaComponent,
    ModPersonaComponent,
    ErrorComponent,
    GlobalNavBarComponent,
    NavPersonaComponent,
    NavTareasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [PersonasService,
              AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
