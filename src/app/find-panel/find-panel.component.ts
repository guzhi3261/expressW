import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-find-panel',
  templateUrl: './find-panel.component.html',
  styleUrls: ['./find-panel.component.css']
})
export class FindPanelComponent implements OnInit {
  @ViewChild('findPanel') find ;
  @ViewChild('history') his;
  hActive = true;
  fActive = false;

  constructor() { }

  ngOnInit(): void {
  }
  changeTab1(){
    this.hActive = true;
    this.fActive = false;
  }
  changeTab2(){
    this.fActive = true;
    this.hActive = false;
  }

}
