import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegisterComponent } from './formulario-register.component';

describe('FormularioRegisterComponent', () => {
  let component: FormularioRegisterComponent;
  let fixture: ComponentFixture<FormularioRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
