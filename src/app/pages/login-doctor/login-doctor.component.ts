import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthUsersService} from '../../services/auth-users.service';


@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent {
  constructor(private builder: FormBuilder, private service: AuthUsersService,  
    private router: Router){
    }
    jsonResponse: any;

    loginformDoctor = this.builder.group({
      cedula: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required)
    })

    proceedloginDoctor(){
      if(this.loginformDoctor.valid){
        this.service.getUserDoctor(this.loginformDoctor.value.cedula, this.loginformDoctor.value.password).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
  
          if (this.jsonResponse.status == "ok"){
            this.router.navigate(['selectDoctor']);
  
          }else if(this.jsonResponse.status == "error"){
            this.loginformDoctor.setErrors({ unauthenticated: true });
          }
        })
      }
    }




}
