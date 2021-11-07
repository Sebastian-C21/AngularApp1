import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/images/cat1.jpg',
    'assets/images/cat3.jpg',
    'assets/images/cat4.jpg'

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
