import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPInterceptorService } from './services/http-interceptor.service';
import { LoginComponent } from './components/login/login.component';
import { MissionComponent } from './mission/mission.component';
import { AuthService } from './services/auth.service';



@NgModule({
declarations: [
AppComponent,
HeaderComponent,
SidenavComponent,
LoginComponent,
MissionComponent
],
imports: [
BrowserModule,
AppRoutingModule,
BrowserAnimationsModule,
SharedModule
],
providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPInterceptorService,
      multi:true,
    }
],
bootstrap: [AppComponent]
})
export class AppModule { }

