import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path:"", component:HomeDashboardComponent},
  {path:"user", component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
