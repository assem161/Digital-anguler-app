import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {


  signForm : FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.signForm = this.fb.group({
      'username' : [null,[Validators.required]],
      'email' : [null,[Validators.required,Validators.email]],
      'password' : [null,Validators.required],
    })
  }

  signup(signForm){
    console.log(signForm)
  }
}
