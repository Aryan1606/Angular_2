import { Component, OnInit, Input, Output } from '@angular/core';
import {CreateComponent} from '../create/create.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {
  @Input() childMessage: string;
  data: any = {};
  routeState: any;
  constructor(private router: Router) {
    
    if(this.router.getCurrentNavigation()?.extras.state){
      this.routeState = this.router.getCurrentNavigation()?.extras.state;
      if (this.routeState) {
        this.data.name = this.routeState.username ? (this.routeState.username) : '';
        this.data.email = this.routeState.email ? this.routeState.email : '';
        this.data.gender= this.routeState.gender ? this.routeState.gender : '';
        this.data.mobile= this.routeState.mobile ? this.routeState.mobile : '';
        this.data.category= this.routeState.category ? this.routeState.category : '';
        this.data.file= this.routeState.file ? this.routeState.file : '';
        this.data.myCheckboxGroup= this.routeState.myCheckboxGroup ? this.routeState.myCheckboxGroup : '';
      }
    }
    console.log(this.data)
    console.log(this.data.file)
    console.log('Name: ', )
    // console.log(this.router.getCurrentNavigation()?.extras.state?.example)
   }

   onSubmit(){
    this.router.navigateByUrl('users/view',  { state: { example: this.data }})
      
   }

   onCancel(){
    this.router.navigateByUrl('',  { state: { example: this.data }})
   }

  ngOnInit(): void {
  }

}
