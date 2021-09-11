import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskDetailsPageComponent } from './pages/task-details-page/task-details-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { TareasListaComponent } from './components/tareas-lista/tareas-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioRegisterComponent } from './components/formulario-register/formulario-register.component';

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ContactosDetallesComponent } from './components/contactos-detalles/contactos-detalles.component';
import { ContactosListaComponent } from './components/contactos-lista/contactos-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegisterPageComponent,
    TaskListPageComponent,
    TaskDetailsPageComponent,
    ContactListPageComponent,
    ContactDetailsPageComponent,
    NotFoundPageComponent,
    FormularioLoginComponent,
    TareasListaComponent,
    FormularioRegisterComponent,
    CrearTareaComponent,
    NavbarComponent,
    ContactosDetallesComponent,
    ContactosListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
