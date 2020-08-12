import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  head = 'BOOK AN';
  coloredHead = 'APPOINTMENT';

  constructor() { }

  ngOnInit(): void {
  }

}
