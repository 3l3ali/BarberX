import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  head = 'ABOUT';
  coloredHead = 'US';
  constructor(private title: Title) {
    this.title.setTitle('BarberX - About Us');
  }

  ngOnInit(): void {
  }

}
