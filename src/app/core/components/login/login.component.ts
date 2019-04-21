import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  private alertMessage: string;
  constructor(private authService: AuthenticationService,private router: Router ,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required]
  });
  }

  login() {
    const val = this.form.value;
    if (val.userName && val.password) {
      this.authService.login(val.userName, val.password);
      console.log("User is logged in");
      this.router.navigateByUrl('/dashboard');
    }
  }
}
;