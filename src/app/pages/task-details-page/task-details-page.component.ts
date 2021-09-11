import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/models/tarea.model';
import { TareasService } from 'src/app/services/tareas.service';


@Component({
  selector: 'app-task-details-page',
  templateUrl: './task-details-page.component.html',
  styleUrls: ['./task-details-page.component.scss']
})
export class TaskDetailsPageComponent implements OnInit {
  tareas: any[] = [];

  tarea ={
    id: 0,
    titulo: '',
    descripcion: '',
    urgencia: [],
    responsable: '',
    fechaInicio: new Date(',,'),
    fechaFin: new Date(',,'),
  };

  cargandoTarea: boolean = true

  constructor(private _route: ActivatedRoute, private _tareaService: TareasService) { }

  ngOnInit():void {



      // ? OBTENEMOS LAS TAREAS
      this._route.queryParams.subscribe(
        (params) => {
          // console.log('QUERY PARAMS',params);
          if(params.id || params.titulo || params.urgencia || params.responsable || params.fechaInicio || params.fechaFin ){
            this.tarea={
              id: params.id,
              titulo:params.titulo,
              descripcion: params.descripcion,
              urgencia: params.urgencia,
              responsable: params.responsable,
              fechaInicio: params.fechaInicio,
              fechaFin: params.fechaFin
            }
            this.cargandoTarea = false;
          }
        },
        (error) => alert('Ha habido un error al cargar la tarea'),
        () => console.log(`Tarea Obtenida de la ruta: ${this.tarea}`)
      )
      
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

}
