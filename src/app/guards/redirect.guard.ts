import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }


  canActivate(): boolean {
    const token = this.tokenService.getTokenFromCookie();

    if (token) {
      this.router.navigate(['/app']);
    }
    return true;
  }
}
  
