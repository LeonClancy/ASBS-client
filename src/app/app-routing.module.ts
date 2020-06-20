import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { SpaceListComponent } from "./space/space-list/space-list.component";
import { SpaceDetailComponent } from "./space/space-detail/space-detail.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'space', component: SpaceListComponent },
  { path: 'space/:id', component: SpaceDetailComponent },
  { path: 'admin', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
