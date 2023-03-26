import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL;

  constructor(
    private HttpClient: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.HttpClient.post(`${this.apiUrl}/auth/login`, { email, password });
  }
}
