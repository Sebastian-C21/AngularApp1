import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper, { Navigation, Pagination, SwiperOptions} from 'swiper';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;
  constructor() { }
  ngOnInit(): void {

  }
  ngAfterViewInit(){
      this.mySwiper = new Swiper('.swiper-container');
  }

}
