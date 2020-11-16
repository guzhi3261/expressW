import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  subOrgan: Object = [];

  constructor() { }

  ngOnInit(): void {
    this.subOrgan = [
      {name:'深圳总部',address:'深圳市龙岗区吉华路357号（挺好国际物流）',profile:'',phone:'',eaail: ''},
      {name:'义务分公司',address:'义乌市公路港物流中心17幢2层18号（挺好国际物流）',profile:'',phone:'',eaail: ''},
      {name:'江西顺兴分公司',address:'江西顺兴物流有限公司成立于2018年4月，主要从事道路货物运输、仓储、运输器材销售等。成为恒大冰泉、恒大粮油、合续环保、翠林木业等多家知名企业的优质服务商。 ',profile:'',phone:'',eaail: ''},
      {name:'江西锦吉分公司',address:'江西锦吉物流有限公司成立2016年6月，主要从事普通货物道路运输、仓储服务。与ABC、热风、美然化妆品等优秀企业成为合作伙伴。 ',profile:'',phone:'',eaail: ''},
      {name:'辽宁明晟分公司',address:'辽宁明晟物流有限公司成立于2020年3月，主要从事货物运输代理服务、仓储服务等。与五常大米，振邦饲料等企业进行深入合作。 ',profile:'',phone:'',eaail: ''},
      {name:'高安市分公司',address:'高安市晨飞物流有限公司 成立于2017年09月，主要从事道路普通货物运输、货物专用运输、货运代理服务等。 ',profile:'',phone:'',eaail: ''},
    ]
  }
  
}
