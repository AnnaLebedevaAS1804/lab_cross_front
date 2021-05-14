import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployerComponent} from './employer/employer.component';
import {LoginComponent} from './components/login/login.component';
import {MissionComponent} from './mission/mission.component';

const routes: Routes = [
  { path: 'Employers', component: EmployerComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Missions', component: MissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
