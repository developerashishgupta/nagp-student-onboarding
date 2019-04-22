import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private authService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required, Validators.minLength(3)],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: NgForm) {
    const val = this.form.value;
    if (form.valid) {
      this.authService.login(val.userName, val.password); 
    }
  }
}