import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AppointmentsComponent
  ]
})
export class AppointmentsModule { }
