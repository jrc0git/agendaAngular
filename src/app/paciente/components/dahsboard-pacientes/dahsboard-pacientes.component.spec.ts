import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahsboardPacientesComponent } from './dahsboard-pacientes.component';

describe('DahsboardPacientesComponent', () => {
  let component: DahsboardPacientesComponent;
  let fixture: ComponentFixture<DahsboardPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DahsboardPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DahsboardPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
