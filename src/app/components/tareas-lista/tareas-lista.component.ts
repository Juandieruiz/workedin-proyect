import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITareas } from 'src/app/models/itareas.interface';
import { TareasService } from 'src/app/services/tareas.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tareas-lista',
  templateUrl: './tareas-lista.component.html',
  styleUrls: ['./tareas-lista.component.scss']
})
export class TareasListaComponent implements OnInit {
  tareas: any[] = [];
  constructor(
    private _tareaService: TareasService,
    private toastr: ToastrService,
    private _router: Router) {
  }

  ngOnInit(): void {
    this.getTareas()

  }

  getTareas() {
    this._tareaService.getTareas().subscribe(data => {
      this.tareas = [];
      data.forEach((element: any) => {
        this.tareas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.tareas);
    });
  }

  eliminarTarea(id: any) {
    this._tareaService.eliminarTarea(id).then(() => {
      console.log('Tarea eliminada con exito');
      this.toastr.error('La tarea fue eliminada con exito', 'Tarea eliminada!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }

   // navegar a detalle
  irADetalle(i: number){
    this._router.navigate([`/detail/${i}`])
  }
}