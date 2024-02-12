import { Injectable } from '@angular/core';
import { ILogin, ILoginResponse } from '../models/auth.model';
import { apiEndpoint } from '../constants/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  onLogin(data: ILogin){
    return this.http.post<ILoginResponse>(
      `${apiEndpoint.AuthEndpoint.login}`,
      data
    ).pipe(
      map((response)=>{
        if(response) {
          this.tokenService.setToken(response.token)
        }
      })
    )
  }
  onLogout(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenService.getToken()}`
    })
    return this.http
      .get(`${apiEndpoint.AuthEndpoint.logout}`,{headers})
      .pipe(
        map((response)=>{
          if(response){
            this.tokenService.removeToken()
          }
          return response
        })
      )
  }
}
