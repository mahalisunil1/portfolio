import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './helpers/navbar/navbar.component';
import { SidenavComponent } from './helpers/sidenav/sidenav.component';
import { FooterComponent } from './helpers/footer/footer.component';
import { MaterialModule } from './custom-modules/material/material.module';
import { LiquidSvgBackgroundComponent } from './animations/liquid-svg-background/liquid-svg-background.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    // LiquidSvgBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
