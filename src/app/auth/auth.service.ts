import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(http: HttpClient) {
    this.http = http;
  }

  http: HttpClient;
  isLoggedIn = false;
  token: string;
  loginUrl:string = 'http://127.0.0.1:7200/login';
  redirectTo: string;

  login(): Observable {
    return this.http.get(this.loginUrl)
      .pipe(
        tap()
      );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
