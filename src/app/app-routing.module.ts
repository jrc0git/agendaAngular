import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardPacientesComponent } from './paciente/components/dahsboard-pacientes/dahsboard-pacientes.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./paciente/modulo-pacientes/modulo-pacientes.module').then(m=>m.ModuloPacientesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
