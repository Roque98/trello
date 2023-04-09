import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from "typescript-cookie";
import jwt_decode, { JwtPayload } from "jwt-decode";

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

  /**
   * save token in cookie
   * @param token
   * @returns void
   */
  saveTokenInCookie(token: string) {
    setCookie('token', token, { expires: 1, path: '/' });
  }

  /**
   * get token from cookie
   * @returns token
   * @returns void
    */
  getTokenFromCookie() {
    const token = getCookie('token');
    return token;
  }

  /**
   * remove token from cookie
   * @returns void
    */
  removeTokenFromCookie() {
    removeCookie('token');
  }
  
  /**
   * isValidToken
   * @returns boolean
   */
  isValidToken() {
    const token = this.getTokenFromCookie();

    // if token is not present
    if (!token) {
      return false;
    }

    // if token is present
    const decodeToken = jwt_decode<JwtPayload>(token);

    // if token is expired
    if (decodeToken.exp && decodeToken.exp > Date.now() / 1000) {
      return true;
    }

    return false;
  }
}
