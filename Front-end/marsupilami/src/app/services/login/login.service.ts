import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  success: boolean,
  message: string
}
const baseUrl = 'http://localhost:8080';

@Injectable()
export class AuthService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(username: string, password :string) {
    // post these details to API server return user info if correct
    return this.http.post<myData>(`${baseUrl}/api/login`, {
      username,
      password
    })
  }
  registerUser(username:string, password:string,cpassword:string) {
    // post these details to API server return user info if correct
    return this.http.post(`${baseUrl}/api/register`, {
      username,
      password,
      cpassword
    })
  }
  

}
