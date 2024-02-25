import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackgroundComponent } from '../../shared/background/background.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  imports: [BackgroundComponent],
})
export class LoginPageComponent {
    form: FormGroup;

    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        name: [''],
        email: [''],
      });
  }
  onSubmit() {
    console.log(this.form.value); // Access all form data
    // console.log(this.form.('name').value); // Access specific control value
  }
}
