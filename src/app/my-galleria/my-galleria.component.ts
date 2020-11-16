import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-galleria',
  templateUrl: './my-galleria.component.html',
  styleUrls: ['./my-galleria.component.css']
})
export class MyGalleriaComponent implements OnInit {

  images: Object[] = [
    {'src':'../../assets/imgs/4.jpg'},
    {'src':'../../assets/imgs/5.jpg'},
    {'src':'../../assets/imgs/6.jpg'},
  ];
  responsiveOptions;

  constructor() { 
   this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  }

  ngOnInit(): void {
  }

}
