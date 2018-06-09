import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MedicoComponent} from './Medicos/crear-medico.component';
import { MaterializeModule } from 'angular2-materialize';
import {AutoComponent} from './auto/auto.component';
import {PacienteComponent} from './Persona/crear-paciente.component'
@NgModule({
  declarations: [
    MedicoComponent,
    AppComponent,
    AutoComponent,
    PacienteComponent,
  ],
  imports: [
    MaterializeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
