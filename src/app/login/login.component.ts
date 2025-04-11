import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   lg = new FormControl('Amir',Validators.required)
   pwd = new FormControl('',Validators.required)

   save(){
    console.log(this.lg)
    console.log(this.pwd)
   }

   loginForm =  new FormGroup({

    login : new FormControl('',[Validators.required,Validators.minLength(4)]),
    password : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
    email : new FormControl('',[Validators.required, Validators.email]),
    telephone : new FormControl('',[Validators.required,Validators.min(8)]),
    adresse : new FormControl('',Validators.required),

   })
}
