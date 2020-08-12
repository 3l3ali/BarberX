import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CARDS } from '../data/cards';
import { ICard } from '../data/icard';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  cards: ICard[] = CARDS;
  head = 'OUR';
  coloredHead = 'SERVICES';

  constructor(title: Title) {
    title.setTitle('BarberX - Our Services');
  }

  ngOnInit(): void {
  }

}
