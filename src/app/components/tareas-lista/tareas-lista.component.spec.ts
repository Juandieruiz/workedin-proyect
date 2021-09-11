import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasListaComponent } from './tareas-lista.component';

describe('TareasListaComponent', () => {
  let component: TareasListaComponent;
  let fixture: ComponentFixture<TareasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
