import { AutofillMonitor } from '@angular/cdk/text-field';
import { OnInit } from '@angular/core';
import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SRV_URL } from 'src/app/config';
import { AuthService } from '../../services/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  } 
}

/** @title Form field with prefix & suffix */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})



export class LoginComponent implements AfterViewInit, OnDestroy {
  @ViewChild('first', { read: ElementRef })
  Email!: ElementRef<HTMLElement>;
  @ViewChild('last', { read: ElementRef })
  Password!: ElementRef<HTMLElement>;
  EmailAutofilled!: boolean;
  PasswordAutofilled!: boolean;
  public msg!: string;

  constructor(private _autofill: AutofillMonitor,private _auth:AuthService ) {}

  ngAfterViewInit() {
    this._autofill.monitor(this.Email)
        .subscribe(e => this.EmailAutofilled = e.isAutofilled);
    this._autofill.monitor(this.Password)
        .subscribe(e => this.PasswordAutofilled = e.isAutofilled);
  }
  EmailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  PasswordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  matcher_pass = new MyErrorStateMatcher();

  ngOnDestroy() {
    this._autofill.stopMonitoring(this.Email);
    this._autofill.stopMonitoring(this.Password);
  }

  public onClick(info: { email: string, password: string }){
    console.log(info);
    this._auth.login(JSON.parse(JSON.stringify(info))).subscribe(
      status=>
      {
        if (status==200)
        {
          this.msg = "Success";
          this._auth.sendGetRequest();
        }
        else if (status==401)
          this.msg = "Wrong login/password";
        else
          this.msg = `Something went wrong (${status})`;
      });
   }
}
// async onClick() {
//   let fromData = new FormData();
//   fromData.append{"email",this.Email.value}; 
//   fromData.append{"password",this.Password.value}; 
//   let response = await fetch('http://localhost:4200/Login',{
//     method:'POST',
//     body: fromData
//   });
//   if (response.ok){
//     let result = await response.json();
//     //alert(result.message);
//   }
  
// }


  //onClick(){
    //let url =`${SRV_URL}${req.url}`
    //let url =`${SRV_URL}${req.url}
    //let response = await fetch(/)
    // const request = req.clone({
    //   headers,
    //   url:`${SRV_URL}${req.url}`,
  //}

//}
  
