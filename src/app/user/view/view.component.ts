import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  data:any
  constructor(private router: Router, private service :ServiceService) { 
    this.data=service.list
  }

  ngOnInit(): void {
  }

}
