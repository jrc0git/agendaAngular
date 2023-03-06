import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pacientes } from '../clases/pacientes';
import { params } from '../environment/environment';



@Injectable()
export class PacienteServiceService {

  constructor(private http: HttpClient) { }



  postPaciente(paciente: Pacientes): Observable<Pacientes> {

    return this.http.post<Pacientes>(params.URL_PACIENTES, paciente);

  }

  getPaciente(id: number): Observable<Pacientes> {

    let url = params.URL_PACIENTES + '/' + id;
    return this.http.get<Pacientes>(url);

  }

  getAll():Observable<Array<Pacientes>>{
    return this.http.get<Array<Pacientes>>(params.URL_PACIENTES);
  }
}
