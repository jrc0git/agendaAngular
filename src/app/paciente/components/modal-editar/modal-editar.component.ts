import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PacienteServiceService } from 'src/app/servicios/paciente-service.service';



@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent implements OnInit {

  @Input() id:number=0;


  constructor(public activeModal: NgbActiveModal, service:PacienteServiceService){
    
  }

  ngOnInit(): void {
    console.log(this.id);

    
    
  }

}
