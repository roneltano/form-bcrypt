import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(private formbuilder: FormBuilder) {}

  passwordshow: any;

  getValue(pass: any[]) {
    console.warn(pass);

    const salt = bcrypt.genSaltSync(10);
    this.passwordshow = pass;
    this.passwordshow = bcrypt.hashSync('password', 10);
  }

  ngOnInit(): void {}

  onSubmit(a: NgForm) {
    console.log(a.value, a.valid);
  }
}
