import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrimengModule } from './primeng.module';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutTingHaoComponent } from './about-ting-hao/about-ting-hao.component';
import { MyGalleriaComponent } from './my-galleria/my-galleria.component';
import { AdvanTageComponent } from './advan-tage/advan-tage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductServerComponent } from './product-server/product-server.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartnerComponent } from './partner/partner.component';
import { DetailsComponent } from './details/details.component';
import { FindPanelComponent } from './find-panel/find-panel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    AboutTingHaoComponent,
    MyGalleriaComponent,
    AdvanTageComponent,
    HomePageComponent,
    ProductServerComponent,
    AboutUsComponent,
    PartnerComponent,
    DetailsComponent,
    FindPanelComponent,
    ContactUsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
