import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloPacientesRoutingModule } from './modulo-pacientes-routing.module';
import { DahsboardPacientesComponent } from '../components/dahsboard-pacientes/dahsboard-pacientes.component';


@NgModule({
  declarations: [
    DahsboardPacientesComponent
  ],
  imports: [
    CommonModule,
    ModuloPacientesRoutingModule
  ]
})
export class ModuloPacientesModule { }
