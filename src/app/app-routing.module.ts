import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutTingHaoComponent } from './about-ting-hao/about-ting-hao.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MyGalleriaComponent } from './my-galleria/my-galleria.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  
  {path:'about',component:AboutTingHaoComponent},
  {path:'details',component:DetailsComponent},

  {path:'**',component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
