import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {GalleriaModule} from 'primeng/galleria';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CarouselModule,
    InputTextModule,
    GalleriaModule
  ],
  exports: [MenubarModule, CarouselModule, InputTextModule,GalleriaModule]
})
export class PrimengModule { }
