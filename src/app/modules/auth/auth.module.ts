import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { BackgroundComponent } from './components/app-background/background.component';
import { HeaderComponent } from './components/header/header.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RecoveryFormComponent } from './components/recovery-form/recovery-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';



@NgModule({
  declarations: [
    ForgotPasswordComponent,
    BackgroundComponent,
    HeaderComponent,
    ForgotPasswordFormComponent,
    FooterComponent,
    LoginComponent,
    LoginFormComponent,
    RecoveryComponent,
    RecoveryFormComponent,
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class AuthModule { }
