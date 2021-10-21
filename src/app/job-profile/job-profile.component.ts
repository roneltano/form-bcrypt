import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css'],
})
export class JobProfileComponent implements OnInit {
  form = this.builder.group({
    name: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    add: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
      },
    ],
    job: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    post: [
      '',
      {
        validators: [Validators.required],
      },
    ],
  });

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.controls.name.value);
    console.log(this.form.controls.add.value);
    console.log(this.form.controls.email.value);
    console.log(this.form.controls.job.value);
    console.log(this.form.controls.post.value);
  }

  get email() {
    return this.form.controls['email'];
  }
  get name() {
    return this.form.controls['name'];
  }
  get add() {
    return this.form.controls['add'];
  }
  get job() {
    return this.form.controls['job'];
  }
  get post() {
    return this.form.controls['post'];
  }
}
