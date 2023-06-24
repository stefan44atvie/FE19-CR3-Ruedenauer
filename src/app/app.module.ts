import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';
import { HeroComponent } from './hero/hero.component';
import { HeroAboutComponent } from './hero-about/hero-about.component';
import { HeroMenuComponent } from './hero-menu/hero-menu.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { CartComponent } from './cart/cart.component';
import { HeroCartComponent } from './hero-cart/hero-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    DetailsComponent,
    OrderComponent,
    HeroComponent,
    HeroAboutComponent,
    HeroMenuComponent,
    DishDetailsComponent,
    HeroDetailsComponent,
    CartComponent,
    HeroCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
