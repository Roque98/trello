import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isOpen = false;
  faBell = faBell;
  faInfoCircle = faInfoCircle;

  user$ = this.authService.user$;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
