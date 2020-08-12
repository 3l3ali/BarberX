import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { PriceListComponent } from './components/price-list/price-list.component';
import { CardComponent } from './components/card/card.component';
import { FeatureBannerComponent } from './components/feature-banner/feature-banner.component';



@NgModule({
  declarations: [BannerComponent, CarouselComponent, PriceListComponent, CardComponent, FeatureBannerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    CarouselComponent,
    PriceListComponent,
    CardComponent,
    FeatureBannerComponent
  ]
})
export class SharedModule { }
