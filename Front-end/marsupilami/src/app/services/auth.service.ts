import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  success: boolean,
  message: string,
  id:string
}
interface registerResponse{
    success: boolean
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

  getUserDetails(username :string , password:string) {
    // post these details to API server return user info if correct
    return this.http.post<myData>(`${baseUrl}/api/login`, {
      username,
      password
    })
  }
  registerUser(username :string, password :string){
      return this.http.post<registerResponse>(`${baseUrl}/api/register`, { 
          username,
          password,
          
      })
  }

}