import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @ViewChild('tool') tool :ElementRef;
  images: Object[] = [
    {'src':'../../assets/imgs/4.jpg'},
    {'src':'../../assets/imgs/5.jpg'},
    {'src':'../../assets/imgs/6.jpg'},
  ];
  // images: Object[] = [
  //   {'src':'https://www.sf-express.com/cn/sc/download/IMG20190905_170942.jpg'},
  //   {'src':'https://www.sf-express.com/cn/sc/download/20200921-pc-1349X487.jpg'},
  //   {'src':'https://www.sf-express.com/cn/sc/download/IMG20190905_171924.jpg'},
  // ];
  buttomMenus = ['运单追踪','我要寄件','运费时效查询','收寄范围查询'];
  responsiveOptions

  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(): void {
  }
  openTool(){
    this.tool.nativeElement.style.display = 'inline'
  }
  changeCss($event){
    let e =$event
    e.target.classList.add('overLi');
  }
  removeCss($event){
    $event.target.classList.remove('overLi')
  }

}
// 挺好国际物流有限公司