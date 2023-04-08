import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { switchMap, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { ResponseLogin } from '../models/auth.model';
import { User } from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL;

  constructor(
    private HttpClient: HttpClient,
    private tokenService: TokenService
  ) { }

  /**
    Logs a user into the system.
    @param {string} email - The user's email address.
    @param {string} password - The user's password.
    @returns {Promise} A promise that resolves with the user's authentication token.
  */
  login(email: string, password: string) {
    return this.HttpClient.post<ResponseLogin>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap((response) => {
          this.tokenService.saveTokenInCookie(response.access_token);
        })
      );
  }

  /**
   * Registers a new user.
   * @param {string} name - The user's name.
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @returns {Promise} A promise that resolves with the user's authentication token.
   * @memberof AuthService
   */

  register(name: string, email: string, password: string) {
    return this.HttpClient.post(`${this.apiUrl}/auth/register`, { name, email, password });
  }

  /**
   * IsAvailable
   * @param {string} email - The user's email address.
  */
  isAvailable(email: string) {
    return this.HttpClient.post<{ isAvailable: boolean }>(`${this.apiUrl}/auth/is-available`, { email });
  }

  /**
   * RegisterAndLogin
   * @param {string} name - The user's name.
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @returns {Promise} A promise that resolves with the user's authentication token.
   * @memberof AuthService
   */
  registerAndLogin(name: string, email: string, password: string) {
    return this.register(name, email, password)
      .pipe(
        switchMap((response) => {
          return this.login(email, password);
        }
        )
      );
  }

  /**
   * RecoveryPassword
   * @param {string} email - The user's email address.
   * @returns {Promise} A promise that resolves with the user's authentication token.
   * @memberof AuthService
   * @description Send email to user with recovery password link.
    */
  recoveryPassword(email: string) {
    return this.HttpClient.post(`${this.apiUrl}/auth/recovery`, { email });
  }

  /**
   * changePassword
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @param {string} token - The user's token.
   * @returns {Promise} A promise that resolves with the user's authentication token.
   * @memberof AuthService
  */
  changePassword(token: string, password: string) {
    return this.HttpClient.post(`${this.apiUrl}/auth/change-password`, { token, password });
  }

  /**
   * Logout
   * @returns {Promise} A promise that resolves with the user's authentication token.
   * @memberof AuthService
   */
  logout() {
    this.tokenService.removeTokenFromCookie();
  }

  /**
   * profile
   * @returns {Promise} A promise that resolves with the user's authentication token.
   * 
  */
  getProfile() {
    const token = this.tokenService.getTokenFromCookie();
    return this.HttpClient.get<User>(`${this.apiUrl}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
