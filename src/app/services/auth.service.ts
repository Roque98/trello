import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL;

  constructor(
    private HttpClient: HttpClient
  ) { }

  /**
    Logs a user into the system.
    @param {string} email - The user's email address.
    @param {string} password - The user's password.
    @returns {Promise} A promise that resolves with the user's authentication token.
  */
  login(email: string, password: string) {
    return this.HttpClient.post(`${this.apiUrl}/auth/login`, { email, password });
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
}
