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

  result: any;
 

  loginform = this.builder.group({
    cedula: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  proceedlogin(){

    //let formObj = this.loginform.getRawValue(); // {name: '', description: ''}
    //let serializedForm = JSON.stringify(formObj);

    

    console.log(this.loginform.value.cedula);
    console.log(this.loginform.value.password);

    if(this.loginform.valid){
      console.log("1");

      this.service.getUsers(this.loginform.value.cedula, this.loginform.value.password).subscribe(item => {
        console.log("2");
        this.result = item;
        console.log("3");
        if (this.result.status == "ok"){
          console.log("4");
          console.log(this.result.status)
          console.log("5");
          this.router.navigate(['selectPatient']);
          console.log("6");
        }else{
          console.log(this.result.status)
          console.log("7");
          this.loginform.setErrors({ unauthenticated: true });
          console.log("8");
        }
      })
    }
  }




  getUserFormData(data:any)
  {
    console.warn(data)
  }
}
