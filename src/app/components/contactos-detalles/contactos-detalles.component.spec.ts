import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosDetallesComponent } from './contactos-detalles.component';

describe('ContactosDetallesComponent', () => {
  let component: ContactosDetallesComponent;
  let fixture: ComponentFixture<ContactosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactosDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
