import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { ProjectsComponent } from './admin/projects/projects.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"",component:DashboardComponent,pathMatch:"full" },//gives default path
  //path match default is pre and full is used for non child routes
  {path:"projects",component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
