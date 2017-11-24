import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { OfferSliderComponent } from './offer-slider/offer-slider.component';
import { ProductComponent } from './product/product.component';
import { CollectionComponent } from './collection/collection.component';
import { FooterComponent } from './footer/footer.component';
import { SingleProductComponent } from './single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    MainSliderComponent,
    OfferSliderComponent,
    ProductComponent,
    CollectionComponent,
    FooterComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
