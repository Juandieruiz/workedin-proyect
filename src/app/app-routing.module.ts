import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { TaskDetailsPageComponent } from './pages/task-details-page/task-details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TareasListaComponent } from './components/tareas-lista/tareas-lista.component';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';

const routes: Routes = [
  {
    //localhost:4200/
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    //localhost:4200/login
    path: 'login',
    component: LoginPageComponent
  },
  {
    //localhost:4200/register
    path: 'register',
    component: RegisterPageComponent
  },
  {
    //localhost:4200/home
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  
  {
    //localhost:4200/task-list
    path: 'task-list',
    component: TaskListPageComponent,
    canActivate: [AuthGuard]

  }, 
  {
    path: 'create-task',
    component: CrearTareaComponent
  },
  {
    path: 'editTarea/:id',
    component: CrearTareaComponent
  },
  
  {
    //localhost:4200/detail/{id} --> ID es un parametro
    path: 'detail/:id',
    component: TaskDetailsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    //localhost:4200/contact-list
    path: 'contact-list',
    component: ContactListPageComponent,
    canActivate: [AuthGuard]
  },
  {
    //localhost:4200/contact-detail
    path: 'contact-detail/:id',
    component: ContactDetailsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editContacto/:id',
    component: ContactDetailsPageComponent,
  },
  {
    //localhost:4200/NotFounded
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
