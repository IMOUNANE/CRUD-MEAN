import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import { AddMarsupilamiComponent } from './components/add-marsupilami/add-marsupilami.component';
//import { MarsupilamiDetailsComponent } from './components/marsupilami-details/marsupilami-details.component';
import { MarsupilamisListComponent } from './components/marsupilamis-list/marsupilamis-list.component';
import { ConnectionMarsupilamiComponent } from './components/connection-marsupilami/connection-marsupilami.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
  
    AddMarsupilamiComponent,
    //MarsupilamiDetailsComponent,
    MarsupilamisListComponent,
    ConnectionMarsupilamiComponent,
    NavbarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }