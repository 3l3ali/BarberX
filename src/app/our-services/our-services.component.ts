import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('BarberX - Our Services');
  }

  ngOnInit(): void {
  }

}
