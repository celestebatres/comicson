import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SessionComponent } from './components/session/session.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    LoginComponent,
    SignupComponent,
    SessionComponent,
    IngresoComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
