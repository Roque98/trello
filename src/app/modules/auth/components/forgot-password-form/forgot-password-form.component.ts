import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestStatus } from 'src/app/models/request-status.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent {

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });
  status: RequestStatus = 'init';
  emailSent = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email } = this.form.getRawValue();
      this.authService.recoveryPassword(email)
        .subscribe(
          {
            next: (response) => {
              this.emailSent = true;
              this.status = 'success';
              this.emailSent = true;
              console.log(response);
            },
            error: (error) => {
              this.status = 'failed';
              console.error(error);
            }
          }
        );
    } else {
      this.form.markAllAsTouched();
    }
  }

}
