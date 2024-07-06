import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../custom-modules/material/material.module';
import { LiquidSvgBackgroundComponent } from '../animations/liquid-svg-background/liquid-svg-background.component';



@NgModule({
  declarations: [
    LandingComponent,
    BlogComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    LiquidSvgBackgroundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
