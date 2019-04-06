import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,Validators,NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email' : [null,[Validators.required,Validators.email]],
      'password' : [null,Validators.required],
    })
  }

  login(loginForm){
    console.log(loginForm);
  }

}
