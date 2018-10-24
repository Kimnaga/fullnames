import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LoginService } from './login/login.service';
import { AppRoutingModule } from './app-routing.module';

import {AuthGuard} from './login/auth.guard';
import { DashboardService } from './dashboard/dashboard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, AuthGuard,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
