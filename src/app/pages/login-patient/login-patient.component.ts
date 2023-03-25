import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthUsersService} from '../../services/auth-users.service';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent {
  title = 'Hospital-TECNologico-WebApp';
  users:any;
  constructor(private builder: FormBuilder, private service: AuthUsersService,  
    private router: Router){
    }

  jsonResponse: any;
 

  loginform = this.builder.group({
    cedula: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  proceedlogin(){

    //let formObj = this.loginform.getRawValue(); // {name: '', description: ''}
    //let serializedForm = JSON.stringify(formObj);

    if(this.loginform.valid){

      this.service.getUsers(this.loginform.value.cedula, this.loginform.value.password).subscribe(item => {
        this.jsonResponse = item;
        console.log(this.jsonResponse);
        if (this.jsonResponse.status == "ok"){
          this.router.navigate(['selectPatient']);
        }else if(this.jsonResponse.status == "error"){
          this.loginform.setErrors({ unauthenticated: true });
        }
      })
    }
  }




  getUserFormData(data:any)
  {
    console.warn(data)
  }
}
