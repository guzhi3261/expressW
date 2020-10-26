import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CarouselModule,
    InputTextModule,
  ],
  exports: [MenubarModule, CarouselModule, InputTextModule]
})
export class PrimengModule { }
