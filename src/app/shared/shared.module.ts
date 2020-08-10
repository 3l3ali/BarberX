import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { PriceListComponent } from './components/price-list/price-list.component';



@NgModule({
  declarations: [BannerComponent, CarouselComponent, PriceListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    CarouselComponent,
    PriceListComponent
  ]
})
export class SharedModule { }
