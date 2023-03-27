import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthUsersService} from '../../services/auth-users.service';

@Component({
  selector: 'app-see-clinical-history',
  templateUrl: './see-clinical-history.component.html',
  styleUrls: ['./see-clinical-history.component.css']
})
export class SeeClinicalHistoryComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

    /**
     * Form that will be used to send the information to the auth-users.specs.ts
     */
    loginform = this.builder.group({
    cedula: this.builder.control('', Validators.required)})

  /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
    showHistory(){
      
      if(this.loginform.valid){
  
        this.service.getClinicalHistory(this.loginform.value.cedula).subscribe(item => {

          this.jsonResponse = item;
  
          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);
            this.response = JSON.stringify(this.jsonResponse);
  
          }else {
            
            this.loginform.setErrors({ unauthenticated: true });
          }
        })
      }
    }

  }