import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';



@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AppointmentsComponent
  ]
})
export class AppointmentsModule { }