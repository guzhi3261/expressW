import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutTingHaoComponent } from './about-ting-hao/about-ting-hao.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {path:'',component:CarouselComponent},
  
  {path:'about',component:AboutTingHaoComponent},

  {path:'**',component:CarouselComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
