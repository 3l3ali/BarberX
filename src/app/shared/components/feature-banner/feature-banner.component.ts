import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-banner',
  templateUrl: './feature-banner.component.html',
  styleUrls: ['./feature-banner.component.scss']
})
export class FeatureBannerComponent implements OnInit {
  @Input() head: string;
  @Input() coloredHead: string;

  constructor() { }

  ngOnInit(): void {
  }

}
