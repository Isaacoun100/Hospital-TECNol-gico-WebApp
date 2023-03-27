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
  
  constructor(private builder: FormBuilder, private service: AuthUsersService, 
    private router: Router){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */
  
  loginform = this.builder.group({
    cedula: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
  proceedlogin(){
    //let formObj = this.loginform.getRawValue(); // {name: '', description: ''}
    //let serializedForm = JSON.stringify(formObj);
    if(this.loginform.valid){

      this.service.getUsers(this.loginform.value.cedula, this.loginform.value.password).subscribe(item => {
        this.jsonResponse = item;
        //console.log(this.jsonResponse);

        if (this.jsonResponse.status == "ok"){
          this.router.navigate(['selectPatient']);

        }else {
          
          this.loginform.setErrors({ unauthenticated: true });
        }
      })
    }
  }

}
