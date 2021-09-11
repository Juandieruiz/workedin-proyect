import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contactos-lista',
  templateUrl: './contactos-lista.component.html',
  styleUrls: ['./contactos-lista.component.scss']
})
export class ContactosListaComponent implements OnInit {

  // Lista de contactos que se rellena con los datos que nos devuelve el servicio
  // TODO: crear tipo contacto o Interface
  contactos: any[] = [];
  contactoSeleccionado = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };
  mensajeNuevo: string = 'Mensaje para el padre'; // Mensaje que se envía con el EventEmitter
  @Input() usuario: string = '';
  @Output() mensaje: EventEmitter<string> = new EventEmitter<string>();


  constructor(public service: ContactosService) { }

  ngOnInit(): void {

    this.service.getContactos().subscribe(
      (respuesta) => {
        // respuesta es el json con una clave data donde está la lista
        // por lo tanto accedemos a "data"
        this.contactos = respuesta.data;

      },
      (error) => alert(`Ha ocurrido un error al obtener los contactos: ${error}`),
      () => console.log('Lista de contactos obtenida con éxito')
    )

  }

  // Método que se ejecuta cuando hacemos click en un contacto de la lista
  // Recibe el ID para saber cuál es el contacto seleccionado de la lista y así poder
  // guadarlo en la variable contactoSeleccionado
  seleccionarContacto(id: number){

    this.service.getContacto(id).subscribe(
      (respuesta) => {
        // Detro de respuesta está "data" y dentro los datos del contacto
        this.contactoSeleccionado = respuesta.data;
      },
      (error) => alert(`Ha habido un error al obtener el detalle del contacto: ${error}`),
      () => console.log('Detalle del contacto Seleccionado obtenido con éxito')
    );

  }

  


}