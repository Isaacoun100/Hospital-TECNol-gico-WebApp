import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthUsersService} from '../../services/auth-users.service';

@Component({
  selector: 'app-delete-appointment',
  templateUrl: './delete-appointment.component.html',
  styleUrls: ['./delete-appointment.component.css']
})
export class DeleteAppointmentComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  loginform = this.builder.group({
  reservation_ID: this.builder.control( 0 , Validators.required)})


  /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
  
  deleteAppointment(){

  let formObj = this.loginform.getRawValue();

    console.log(formObj);
    
    if(this.loginform.valid){

      this.service.deleteComponent( this.loginform.value.reservation_ID ).subscribe(item => {

        this.jsonResponse = item;

        if (this.jsonResponse.status == "ok"){

          console.log(this.jsonResponse);

        }else {
          
          this.loginform.setErrors({ unauthenticated: true });
        }
      })
    }
  }

}
