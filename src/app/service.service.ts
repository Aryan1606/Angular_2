import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  list: any=[]
  constructor() { 
    console.log("Start list Data:", this.list)
  }

  pushData(data: any){
    this.list.push(data)
  }
}
