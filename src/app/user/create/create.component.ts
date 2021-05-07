import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray, FormBuilder, ValidatorFn} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ViewFormComponent} from '../view-form/view-form.component'
import {requireCheckboxesToBeCheckedValidator} from './require-checkboxes-to-be-checked.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { 
  }
  genders=['Male','Female'];
  list:any = ['General','SC', 'ST', 'OBC']
  items: FormArray
  
  signupForm:FormGroup;
  abc:any
  ngOnInit(){
    this.signupForm=new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.pattern(/^([A-Za-z])*(\s)*(([A-Za-z])*(\s)*)*$/),
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        
      ]) ),
      email:new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      gender: new FormControl('female', Validators.compose([
        Validators.required
      ])),
      mobile: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^(9|8|7|6)[0-9]*$/)
      ])),
      category: new FormControl('', Validators.compose([
        Validators.required
      ])),
      file: new FormControl('', [Validators.required]),
      myCheckboxGroup: new FormGroup({
        myCheckbox1: new FormControl(false),
        myCheckbox2: new FormControl(false),
        myCheckbox3: new FormControl(false),
      }, requireCheckboxesToBeCheckedValidator()),
      // , requireCheckboxesToBeCheckedValidator()
    })
  }
  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file2 = event.target.files[0];
      this.signupForm.patchValue({
        file: file2
      });
    }
  }

  onSubmit(event: Event){
    console.log("Form Create: ", this.signupForm, this.signupForm.value.file)
    this.router.navigateByUrl('viewform',  { state: {
      username:this.signupForm.value.username,
      email: this.signupForm.value.email,
      gender:this.signupForm.value.gender,
      mobile: this.signupForm.value.mobile,
      category: this.signupForm.value.category,
      file: this.signupForm.value.file,
      myCheckboxGroup: this.signupForm.value.myCheckboxGroup
    }})
  }

  onReset(){
    this.signupForm.reset()
  }
}
