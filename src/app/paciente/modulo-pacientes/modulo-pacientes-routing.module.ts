import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardPacientesComponent } from '../components/dahsboard-pacientes/dahsboard-pacientes.component';
import { GetPacientesComponent } from '../components/get-pacientes/get-pacientes.component';

const routes: Routes = [
  {
    path:'', component:DahsboardPacientesComponent
  },
  {
    path:'go-pacientes', component:GetPacientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPacientesRoutingModule { }
