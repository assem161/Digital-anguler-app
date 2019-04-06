import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-usersinfo',
  templateUrl: './usersinfo.component.html',
  styleUrls: ['./usersinfo.component.css']
})
export class UsersinfoComponent implements OnInit {

 user = {
  firstName:"",
  lastName:"",
  email:"",
  country:"",
  describtion:"",
 }

users = [{
  firstName:"",
  lastName:"",
  email:"",
  country:"",
  describtion:"",
}];

 showUserForm:boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [];
  }


  onSubmit(form: NgForm) {

    let firstName = form.value.firstName;
    let lastName = form.value.lastName;
    let email = form.value.email;
    let country = form.value.country;
    let describtion = form.value.describtion;
    this.users.unshift(firstName,lastName,email,country,describtion);
    this.users = [{
      firstName:firstName,
      lastName:lastName,
      email:email,
      country:country,
      describtion:describtion,
    }];
    console.log(this.users);
  }

}
