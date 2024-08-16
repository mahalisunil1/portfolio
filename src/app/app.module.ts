import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './helpers/navbar/navbar.component';
import { SidenavComponent } from './helpers/sidenav/sidenav.component';
import { FooterComponent } from './helpers/footer/footer.component';
import { BgLightRimComponent } from './animations/bg-light-rim/bg-light-rim.component';
import { MapComponent } from './helpers/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { EmblemTextComponent } from './animations/emblem-text/emblem-text.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GoogleMapsModule],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
