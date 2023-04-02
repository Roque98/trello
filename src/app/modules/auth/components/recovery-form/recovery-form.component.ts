import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html'
})
export class RecoveryFormComponent {

  form = this.formBuilder.nonNullable.group(
    {
      newPassword: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
      ],
    }
  );
  status: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  token = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private ActiveRoute: ActivatedRoute,
    private router: Router
    ) {
      this.ActiveRoute.queryParamMap.subscribe(params => {
        const token = params.get('token');
        if (token) {
          this.token = token;
        } else {
          this.status = 'failed';
          this.router.navigate(['/auth/login']);
        }
      });
    }

  recovery() {
    this.status = 'loading';
    if (this.form.valid) {
      const { newPassword } = this.form.getRawValue();
      this.authService.changePassword(this.token, newPassword)
        .subscribe({
          next: (response) => {
            this.status = 'success';
            console.log(response);
            this.router.navigate(['/auth/login']);
          },
          error: (error) => {
            this.status = 'failed';
            console.error(error);
          }
        });
    } else {
      this.form.markAllAsTouched();
    }
  }

}
