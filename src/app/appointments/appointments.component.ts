import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  head = 'BOOK AN';
  coloredHead = 'APPOINTMENT';

  constructor(private title: Title) {
    this.title.setTitle('BarberX - Book an Appointment');
  }

  ngOnInit(): void {
  }

}
