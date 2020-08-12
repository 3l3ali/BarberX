import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() icon: string;
  @Input() cardTitle: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
