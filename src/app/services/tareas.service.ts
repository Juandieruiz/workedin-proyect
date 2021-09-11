import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITareas } from '../models/itareas.interface';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class TareasService {
  
  constructor(private firestore: AngularFirestore ) { }

agregarTarea(tarea: any): Promise<any> {
  return this.firestore.collection('tareas').add(tarea);
}

getTareas(): Observable<any> {
  return this.firestore.collection('tareas', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
}

eliminarTarea(id: string): Promise<any> {
  return this.firestore.collection('tareas').doc(id).delete();
}

getTarea(id: any): Observable<any> {
  return this.firestore.collection('tareas').doc(id).snapshotChanges();
}

actualizarTarea(id: any, data:any): Promise<any> {
  return this.firestore.collection('tareas').doc(id).update(data);
}

}
