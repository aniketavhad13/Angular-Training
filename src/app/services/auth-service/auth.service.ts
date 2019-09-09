import { HttpService } from './../../helpers/http.service';
import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  login(loginData) {
    let params = new URLSearchParams();
    params.append('username', loginData.username);
    params.append('password', loginData.password);
    params.append('grant_type', 'password');

    return this.http.post(`authorize`, params.toString());
  }

  

}
