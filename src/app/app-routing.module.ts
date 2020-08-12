import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AppointmentsComponent } from './appointments/appointments.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: OurServicesComponent},
  {path: 'appointments', component: AppointmentsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
