import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;
 constructor(private formBuilder: FormBuilder, private router: Router) {
   this.loginForm = this.formBuilder.group({
     username: ['', Validators.required],
     password: ['', Validators.required]
   });
 }
 ngOnInit() {
   
 }
 redirectToProject = () => {
   const username = this.loginForm.get('username')?.value;
   const password = this.loginForm.get('password')?.value;
   if (username === 'admin' && password === 'password') {
     window.location.href = '#home';
   }
 };
 onSubmit() {
   this.redirectToProject();
   this.loginForm.markAllAsTouched();// Mark fields as touched to trigger validation messages
 }
}