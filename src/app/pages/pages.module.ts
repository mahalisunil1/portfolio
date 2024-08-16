import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FooterComponent } from '../helpers/footer/footer.component';
import { BgLightRimComponent } from '../animations/bg-light-rim/bg-light-rim.component';
import { MapComponent } from '../helpers/map/map.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { EmblemTextComponent } from '../animations/emblem-text/emblem-text.component';



@NgModule({
  declarations: [
    LandingComponent,
    AboutComponent,
    BlogComponent,
    ProjectsComponent,
    FooterComponent,
    BgLightRimComponent,
    MapComponent,
    EmblemTextComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    GoogleMapsModule
  ]
})
export class PagesModule { }
