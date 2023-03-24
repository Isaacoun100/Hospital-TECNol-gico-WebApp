import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthUsersService} from '../../services/auth-users.service';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent {
  title = 'Hospital-TECNologico-WebApp';
  users:any;
  constructor(private userData:AuthUsersService)
  {
    this.userData.users().subscribe((data)=>{
      console.warn("data", data);
    })
  }
  getUserFormData(data:any)
  {
    console.warn(data)
  }
}
