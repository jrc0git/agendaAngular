import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardPacientesComponent } from './paciente/components/dahsboard-pacientes/dahsboard-pacientes.component';

const routes: Routes = [
  {
    path:"", component:DahsboardPacientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
