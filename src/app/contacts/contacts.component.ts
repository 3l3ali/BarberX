import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  head = 'CONCTACT';
  coloredHead = 'US';

  constructor(private title: Title) {
    this.title.setTitle('BarberX - Contact Us');
  }

  ngOnInit(): void {
  }

}
