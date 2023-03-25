import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthUsersService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://localhost:7287/api/";

  users()
  {
    return this.http.get(this.baseUrl);
  }
  public getUsers(cedula:any, password:any) {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("cedula",cedula);
    queryParams = queryParams.append("password",password);

    return this.http.get(this.baseUrl + 'auth_patient',{params:queryParams});
}
  
}
