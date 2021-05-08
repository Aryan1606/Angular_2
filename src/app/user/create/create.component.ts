import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray, FormBuilder, ValidatorFn} from '@angular/forms';
import { Router } from '@angular/router';
import {requireCheckboxesToBeCheckedValidator} from './require-checkboxes-to-be-checked.validator';
import { ServiceService } from '../../service.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private service: ServiceService) { 
  }
  //Gender Array
  genderArray=['Male','Female'];

  //Category Array
  list:any = ['General','SC', 'ST', 'OBC']

  // Form Object
  signupForm:FormGroup;

  // Data object to store details of every user
  DataUser:any

  // Boolean to toggle the Modal View
  showModal: boolean=false

  // Variable to store the profile image file selected by the user
  fileData:any
  // URL variable for rendering the profile image on the screen
  imageUrl: any

  ngOnInit(){
    this.signupForm=new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.pattern(/^([A-Za-z])*(\s)*(([A-Za-z])*(\s)*)*$/),
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        
      ]) ),
      email:new FormControl('', Validators.compose([
        Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
        Validators.required,
        Validators.email,
        
      ])),
      gender: new FormControl('', Validators.compose([
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
        myCheckbox4: new FormControl(false),
      }, requireCheckboxesToBeCheckedValidator()),
    })
  }

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      this.fileData = event.target.files[0];
      if (this.fileData.type == 'jpg/png/jpeg' || this.fileData.type == 'image/png' ||this.fileData.type == 'image/jpg' || this.fileData.type == 'image/jpeg') {
        let reader = new FileReader();
        reader.onload = (event: any) => {
          this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileData);
      } 
      else {
        alert("File type should be only of either JPG/JPEG/PNG: ")
        return;
      }
    }
  }

  modalFunc(){
    this.showModal=true 
  }

  onSubmit(event: Event){
    this.DataUser=this.signupForm.value
    this.DataUser.imageUrl=this.imageUrl
    this.service.pushData(this.DataUser)
    this.router.navigateByUrl('users/view',  )
  }

  onReset(){
    this.signupForm.reset()
  }
}
