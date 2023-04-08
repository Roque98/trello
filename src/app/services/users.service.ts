import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { }

  public getUser() {
    const token = this.tokenService.getTokenFromCookie();
    return this.http.get<User[]>(environment.API_URL + '/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
