import { Component, OnInit } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {

  inputEmail: FormControl;
  inputPassword1: FormControl;
  inputPassword2: FormControl;

  // proximas validaciones
  constructor(  ) {
    this.inputEmail = new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(40),
    ]),
    this.inputPassword1 = new FormControl('', [
      Validators.minLength(8),
    Validators.maxLength(16),
    ]),
    this.inputPassword2 = new FormControl('', [
      Validators.minLength(8),
    Validators.maxLength(16),
    ]);

  }
  ngOnInit(): void {
  }



}
