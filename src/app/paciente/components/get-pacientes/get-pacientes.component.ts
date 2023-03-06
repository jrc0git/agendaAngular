import { Component, OnInit } from '@angular/core';
import { Pacientes } from 'src/app/clases/pacientes';
import { PacienteServiceService } from 'src/app/servicios/paciente-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditarComponent } from '../modal-editar/modal-editar.component';

@Component({
  selector: 'app-get-pacientes',
  templateUrl: './get-pacientes.component.html',
  styleUrls: ['./get-pacientes.component.css']
})
export class GetPacientesComponent implements OnInit {

  pacientes:Array<Pacientes>=[];

  constructor(private service:PacienteServiceService,private modalService: NgbModal){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(res=>{
      this.pacientes=res;
    })
  }

  openModal(id:number){
    const modalRef = this.modalService.open(ModalEditarComponent);
    (modalRef.componentInstance).id=id;
  }

}
