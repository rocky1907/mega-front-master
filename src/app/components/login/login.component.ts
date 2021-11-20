import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { Cajero } from 'src/app/models/cajero';
import { logWarnings } from 'protractor/built/driverProviders';

@Component({
  selector: 'mg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });
  public user:User = new User();
  public cajero: Cajero = new Cajero();
  constructor(private formBuilder: FormBuilder,public serviceLogin:LoginService,private _route:ActivatedRoute) { 
    this.loginForm = this.formBuilder.group({
      Username:['',Validators.required],
      Password:['',Validators.required]
    })
  }

  ngOnInit() {
  }
  onSubmit() {
    this.user.passwrod = this.loginForm.value.Password;
    this.user.username = this.loginForm.value.Username;

    if(sessionStorage.length>=1)sessionStorage.clear();
    this.serviceLogin.login(this.user).subscribe(res => {
      sessionStorage.setItem(this.user.passwrod,this.user.username);
      alert("Login exitoso");
    },
    error => {
      alert("Ese usuario no existe");
    })
    this.loginForm.reset();
  }

  escogeCaja(numcaja:any){
    this.cajero.username = this.user.username;
    this.cajero.numerocaja = numcaja;
    sessionStorage.clear();
    sessionStorage.setItem(this.cajero.username,this.cajero.numerocaja);
  }

}
