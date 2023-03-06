import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloPacientesRoutingModule } from './modulo-pacientes-routing.module';
import { DahsboardPacientesComponent } from '../components/dahsboard-pacientes/dahsboard-pacientes.component';
import { PacienteServiceService } from 'src/app/servicios/paciente-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { GetPacientesComponent } from '../components/get-pacientes/get-pacientes.component';
import { ModalEditarComponent } from '../components/modal-editar/modal-editar.component';


@NgModule({
  declarations: [
    DahsboardPacientesComponent,
    GetPacientesComponent,
    ModalEditarComponent
  ],
  imports: [
    CommonModule,
    ModuloPacientesRoutingModule
    
  ]
})
export class ModuloPacientesModule { }
