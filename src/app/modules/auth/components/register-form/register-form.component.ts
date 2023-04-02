import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { RequestStatus } from 'src/app/models/request-status.model';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

  formAvailableEmail = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: [CustomValidators.MatchValidator('password', 'confirmPassword')]
  });

  status: RequestStatus = 'init';
  statusAvailableEmail: RequestStatus = 'init';

  showFormRegister = false;

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { name, email, password } = this.form.getRawValue();
      console.log(name, email, password);
      this.authService.registerAndLogin(name, email, password)
        .subscribe({
          next: (response) => {
            console.log(response);
            console.log('success register');
            
            this.status = 'success';
            this.router.navigate(['/app/boards']);
          },
          error: (error) => {
            console.log(error);
            this.status = 'failed';
          }
        });
    } else {
      this.form.markAllAsTouched();
    }
  }

  validateEmail() {
    if (this.formAvailableEmail.valid) {
      this.statusAvailableEmail = 'loading';
      const { email } = this.formAvailableEmail.getRawValue();
      this.authService.isAvailable(email)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.statusAvailableEmail = 'success';
            if (response.isAvailable) {
              this.showFormRegister = true;
              this.form.controls.email.setValue(email);
            } else {
              this.router.navigate(['/auth/login'], { queryParams: { email } });
            }
          },
          error: (error) => {
            console.log(error);
            this.statusAvailableEmail = 'failed';
          }
        });
    } else {
      this.formAvailableEmail.markAllAsTouched();
    }
  }
}
