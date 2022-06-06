import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

import {urls} from "../constans";
import {IToken, IUser} from "../models";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private refreshToken = 'refresh';
  private accessToken = 'access';

  constructor(private httpClient: HttpClient) {
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user);
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user);
  }

  refresh(): Observable<IToken> {
    const refresh = this.refreshToken;
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
      tap((token: IToken) => {
        this.setToken(token);
      })
    )
  }


  setToken(token: IToken): void {
    localStorage.setItem('refresh', token.refresh);
    localStorage.setItem('access', token.access);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessToken) as string;
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshToken) as string;
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessToken);
    localStorage.removeItem(this.refreshToken);
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessToken);
  }

}
