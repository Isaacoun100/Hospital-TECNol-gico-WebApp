import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthUsersService {
  baseUrl = "https://localhost:7287/api/";

constructor(private http:HttpClient) { }
  
public getUsers(cedula:any, password:any) {
  
  let queryParams = new HttpParams();
  queryParams = queryParams.append("cedula",cedula);
  queryParams = queryParams.append("password",password);

  return this.http.get(this.baseUrl + 'auth_patient',{params:queryParams});
}

public getUserDoctor(cedula:any, password:any) {

  let queryParams = new HttpParams();
  queryParams = queryParams.append("cedula",cedula);
  queryParams = queryParams.append("password",password);

  return this.http.get(this.baseUrl + 'auth_worker',{params:queryParams});
}

public getClinicalHistory(cedula:any) {

  let queryParams = new HttpParams();
  queryParams = queryParams.append("cedula",cedula);

  return this.http.get(this.baseUrl + 'get_history',{params:queryParams});

}

public deleteComponent(reservation_ID:any) {

  let queryParams = new HttpParams();
  queryParams = queryParams.append("reservation_ID",reservation_ID);

  return this.http.delete(this.baseUrl + 'delete_reservation',{params:queryParams});

}

public postUserPatient(data:any) {

  return this.http.post(this.baseUrl + 'create_patient', data);
}

public postClinicalHistory(data:any) {
  
  return this.http.post(this.baseUrl + 'add_clinical_history', data);
}

public postAddAdress(data:any) {
  
  return this.http.post(this.baseUrl + 'add_address', data);
}

public postAddPhone(data:any) {
  
  return this.http.post(this.baseUrl + 'add_phone', data);
}

public postReservación(data:any) {
  
  return this.http.post(this.baseUrl + 'create_reservation', data);
}

public getLastInsertedReservation() {
  
  return this.http.get(this.baseUrl + 'get_last_inserted_reservation');
}

public postProcedureReservation(data:any) {
  
  return this.http.post(this.baseUrl + 'insert_procedure_reservation', data);
}

}
