import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent} from './create/create.component'
import { ViewComponent } from './view/view.component'
import {ViewFormComponent} from './view-form/view-form.component'
const routes: Routes = [
  {
    path:'users/create/view', redirectTo: 'users/view', pathMatch: 'full'
  },
  {
    path: 'users/view/view', redirectTo: 'users/view', pathMatch: 'full'
  },
  {
    path: 'users/view', component: ViewComponent
  },
  // {
  //   path:'viewform', redirectTo: 'users/viewform', pathMatch: 'full'
  // },
  // {
  //   path: 'users/viewform', component: ViewFormComponent
  // },
  // {
  //   path:'users/create/viewform', redirectTo: 'users/viewform', pathMatch: 'full'
  // },
  // {
  //   path: 'users/viewform', component: ViewFormComponent
  // },
  { 
    path:'', redirectTo: 'users/create', pathMatch: 'full'
  },
  {
    path: 'users/create', component: CreateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
