import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarsupilamisListComponent } from './components/marsupilamis-list/marsupilamis-list.component';

import { AddMarsupilamiComponent } from './components/add-marsupilami/add-marsupilami.component';
import{ConnectionMarsupilamiComponent} from'./components/connection-marsupilami/connection-marsupilami.component';

const routes: Routes = [
  {path: '', component: ConnectionMarsupilamiComponent},
  { path: 'marsupilamis', component: MarsupilamisListComponent },
  { path: 'add', component: AddMarsupilamiComponent },
  { path: 'deconnection', redirectTo: ''  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }