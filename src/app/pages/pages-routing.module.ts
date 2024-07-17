import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    {
        path:"",
        component:LandingComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"blog",
        component:BlogComponent
    },
    {
        path:"projects",
        component:ProjectsComponent
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
