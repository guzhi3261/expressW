import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../assets/json/menu.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menu = Menu;
  constructor() { }

  ngOnInit(): void {
  }

}
