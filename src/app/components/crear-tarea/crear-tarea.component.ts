import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TareasService } from 'src/app/services/tareas.service';


@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.scss']
})

export class CrearTareaComponent implements OnInit {
  createTarea: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Tarea';
  urgencia:number[]=[1,2,3,4,5];
  
  constructor(
    private fb: FormBuilder,
    private _tareasService: TareasService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute,) {

    this.createTarea = this.fb.group({
      nt: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      responsable: ['', Validators.required],
      urgencia: ['', Validators.required]

    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarTarea() {
    this.submitted = true;

    if (this.createTarea.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarTarea();
    } else {
      this.editarTarea(this.id);
    }

  }

  agregarTarea() {
    const tarea: any = {
      nt: this.createTarea.value.nt,
      titulo: this.createTarea.value.titulo,
      descripcion: this.createTarea.value.descripcion,
      responsable: this.createTarea.value.responsable,
      urgencia: this.createTarea.value.urgencia,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._tareasService.agregarTarea(tarea).then(() => {
      this.toastr.success('La tarea fue registrada con exito!', 'Tarea Registrada', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      this.router.navigate(['/task-list']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  editarTarea(id: string) {

    const tarea: any = {

    nt: this.createTarea.value.nt,
    titulo: this.createTarea.value.titulo,
    descripcion: this.createTarea.value.descripcion,
    responsable: this.createTarea.value.responsable,
    urgencia: this.createTarea.value.urgencia,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date()
  }

    this.loading = true;

    this._tareasService.actualizarTarea(id, tarea).then(() => {
      this.loading = false;
      this.toastr.info('La tarea fue modificada con exito', 'Tarea modificada', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/task-list']);
    })
  }


  esEditar() {
    this.titulo = 'Editar Tarea'
    if (this.id !== null) {
      this.loading = true;
      this._tareasService.getTarea(this.id).subscribe(data => {
        this.loading = false;
        this.createTarea.setValue({
          nt: data.payload.data()['nt'],
          titulo: data.payload.data()['titulo'],
          descripcion: data.payload.data()['descripcion'],
          responsable: data.payload.data()['responsable'],
          urgencia: data.payload.data()['urgencia'],
        })
      })
    }
  }

}
