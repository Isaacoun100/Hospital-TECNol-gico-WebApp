import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthUsersService {
url = "https://localhost:7287/api/test";
  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get(this.url);
  }
}
