import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
    title: 'Recovery'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
