import { Component } from '@angular/core';
import { MedicoComponent } from './Medicos/crear-medico.component';
import {PacienteComponent} from './Persona/crear-paciente.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
