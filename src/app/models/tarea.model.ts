import { ITareas } from "./itareas.interface";


export class Tarea implements ITareas  {
  
  
    id: number = 0;
    titulo: string = '';
    descripcion: string = '';
    urgencia: []= [];
    responsable: string = '';
    fechaInicio: Date = new Date;
    fechaFin: Date = new Date

  constructor(
    titulo: string ,
    descripcion: string ,
    urgencia: number,
    responsable: string ,
    fechaInicio: Date ,
    fechaFin: Date 
  ){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.urgencia = [];
    this.responsable = responsable;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin
  }



}