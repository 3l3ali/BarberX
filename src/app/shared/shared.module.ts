import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BannerComponent, CarouselComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
