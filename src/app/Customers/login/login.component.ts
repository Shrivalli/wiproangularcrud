import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User={username:"",password:"",role:""}
  errormsg:string;
  userform:FormGroup=new FormGroup({});
  constructor(private route:Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.userform=new FormGroup(
      {
        username:new FormControl(this.user.username,[
          Validators.required, Validators.minLength(5)
        ]),
        password:new FormControl(this.user.password,[
          Validators.required,Validators.maxLength(10)
        ]),
        role:new FormControl(this.user.role,[
          Validators.required])
      }
    );
  }

  login():void
    {
      let currentuser={"username":this.userform.value.username,"password":this.userform.value.password,"role":this.userform.value.role}
      try{
      this.authservice.getUserToken(currentuser);
      if(this.authservice.token!="")
      {
      localStorage.setItem("token",this.authservice.token);
      this.route.navigateByUrl('/customerlist');
      }
      else{
        this.errormsg="Credentials Incorrect";
        this.route.navigateByUrl('/login');
      }
    }
    catch(Exception)
    {
      this.errormsg="Credentials incorrect";
    }

  }
}
