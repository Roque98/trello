import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  /**
   * @param token 
   */
  saveTokenInLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * get token from local storage
   * @returns token
    */
  getTokenFromLocalStorage() {
    const token = localStorage.getItem('token');
    return token;
  }

  /**
   * remove token from local storage
   * @returns void
    */
  removeTokenFromLocalStorage() {
    localStorage.removeItem('token');
  }
}
