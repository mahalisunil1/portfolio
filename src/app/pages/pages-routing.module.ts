import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
        path:"",
        component:LandingComponent
    },
    {
        path:"blog",
        component:BlogComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"projects",
        component:ProjectsComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"**",
        redirectTo:"",
        pathMatch:"full"
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
