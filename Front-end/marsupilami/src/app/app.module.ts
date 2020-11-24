import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import { AddMarsupilamiComponent } from './components/add-marsupilami/add-marsupilami.component';
//import { MarsupilamiDetailsComponent } from './components/marsupilami-details/marsupilami-details.component';
import { MarsupilamisListComponent } from './components/marsupilamis-list/marsupilamis-list.component';
import { LogoutComponent } from './components/logout-component/logout-component.component';
import { LoginComponent } from './components/login-component/login-component.component';
import {AdminComponent} from './components/admin-component/admin-component.component';
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service'
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard-component/dashboard-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    AddMarsupilamiComponent,
    //MarsupilamiDetailsComponent,
    MarsupilamisListComponent,
    AdminComponent,
    NavbarComponent,
    //ConnectionMarsupilamiComponent,
    //NavbarComponent
    //ConnectionMarsupilamiComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }