import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosListaComponent } from './contactos-lista.component';

describe('ContactosListaComponent', () => {
  let component: ContactosListaComponent;
  let fixture: ComponentFixture<ContactosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
