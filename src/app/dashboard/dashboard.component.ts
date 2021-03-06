import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searches: any[];
  fullNames : Observable<any[]>;
  showSuccessMessage : boolean;
  submitted : boolean;
  myForm : FormGroup;
  searchText : string ="";

  constructor(private service: DashboardService) {
    this.searches = [];
  }

/*
  searchHistory() {
    this.service.getSearchHistory().subscribe( (history: any) => {
      this.searches = history;
    });
  }
*/

  onSubmit(){
    //insert operation
    this.submitted = true;
    if (this.myForm.valid){
      this.service.insert(this.myForm.value);
      this.showSuccessMessage= true;
      setTimeout(() => {
        this.showSuccessMessage=false,3000 
      });
      this.submitted = false;
    }
    this.myForm.reset();
  }

  get f () {
    return this.myForm.controls;
  }

  saveSearch(){
    this.service.setSearchHistory(this.searchText);
    this.searchText='';
  }

  firstName : String;
  lastName : String;

  filterCondition (fullName){
    this.firstName = fullName.firstName;
    this.lastName = fullName.lastName;
    return this.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 || this.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }



  ngOnInit() {
    this.myForm = new FormGroup({
      $key : new FormControl(null),
      firstName: new FormControl('', Validators.required),
      lastName:new FormControl('', Validators.required),
    });
    this.fullNames = this.service.getNames();
    
    //this.service.getFirstName().subscribe((firstName :any) => {
     // this.firstNames = firstName});
    //this.service.getLastName().subscribe((lastName : any) => this.lastNames = lastName);
    //this.createFullName();
  }


}
