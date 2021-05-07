import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserRoutingModule } from './user-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
// import { UserComponent } from './user.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewFormComponent } from './view-form/view-form.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent,
    ViewFormComponent,
    // UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class UserModule { }
