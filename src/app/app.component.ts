import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
  <swiper
    [slidesPerView]="3"
    [spaceBetween]="50"
    (swiper)="onSwiper($event)"
    (slideChange)="onSlideChange()"
    [navigation]="true"
    [pagination]="{ clickable: true }"
    [scrollbar]="{ draggable: true }"
  >
    <ng-template swiperSlide>Slide 1</ng-template>
    <ng-template swiperSlide>Slide 2</ng-template>
    <ng-template swiperSlide>Slide 3</ng-template>
  </swiper>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Noon-Front';
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
