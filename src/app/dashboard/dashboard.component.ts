import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searches: any[];
  firstNames : any[];
  lastNames : any[];
  fullNames : any[];
  showSuccessMessage : boolean;
  constructor(private service: DashboardService) {
    this.searches = [];
    this.firstNames =[];
    this.lastNames =[];
    this.fullNames=[];
    this.fullNames.push("test subject");
  }

  form = new FormGroup ({
    firstName : new FormControl(''),
    lastName : new FormControl ('')
  })



/*
  searchHistory() {
    this.dashboardService.getSearchHistory().subscribe( (history: any) => {
      this.searches = history;
    });
  }
*/

  onSubmit(){
    //insert operation
    this.service.insert(this.form.value);
    this.showSuccessMessage= true;
    setTimeout(() => {
      this.showSuccessMessage=false,3000 
    });
  }
  
  len : any = 0;
  index : any=0;
  createFullName(){
    this.len  = this.firstNames.length;
    console.log("length "+this.len);
    this.fullNames.push (this.firstNames[this.index] +" "+ this.lastNames[this.index]);
  }

  ngOnInit() {
    this.service.getFirstName().subscribe((firstName :any) => {
      this.firstNames = firstName});
    this.service.getLastName().subscribe((lastName : any) => this.lastNames = lastName);
    this.createFullName();
  }

}
