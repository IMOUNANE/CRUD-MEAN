import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login-component/login-component.component';
import { LogoutComponent } from './components/logout-component/logout-component.component';
import { AdminComponent } from './components/admin-component/admin-component.component';

import { MarsupilamisListComponent } from './components/marsupilamis-list/marsupilamis-list.component';
import { AddMarsupilamiComponent } from './components/add-marsupilami/add-marsupilami.component';
import { DashboardComponent } from './components/dashboard-component/dashboard-component.component';
//import{ConnectionMarsupilamiComponent} from'./components/connection-marsupilami/connection-marsupilami.component';
import {AuthGuard} from './services/auth.guard';
const routes: Routes = [
  { path: '',
    component:  LoginComponent
  },
  {
    path:'logout',
    component: LogoutComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'dashboard',
    component: DashboardComponent
  },

  { 
    path: 'marsupilamis/:id',
    component: MarsupilamisListComponent 
  },
  { 
    path: 'register',
    component: AddMarsupilamiComponent 
  },
  { 
    path: 'add',
    component: AddMarsupilamiComponent 
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }