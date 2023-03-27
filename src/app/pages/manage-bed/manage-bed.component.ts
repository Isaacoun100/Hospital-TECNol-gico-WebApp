import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthUsersService} from '../../services/auth-users.service';

@Component({
  selector: 'app-manage-bed',
  templateUrl: './manage-bed.component.html',
  styleUrls: ['./manage-bed.component.css']
})
export class ManageBedComponent {

  jsonResponse: any;

  constructor(private builder: FormBuilder, private service: AuthUsersService,  
    private router: Router){}

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  appointment = this.builder.group({
    cedula: this.builder.control('', Validators.required),
    fecha_ingreso: this.builder.control('', Validators.required),
  })

  /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
  manageBed(){
    let formObj = this.appointment.getRawValue(); // {name: '', description: ''}
    console.log(formObj);
    if(this.appointment.valid){

      this.service.postReservación(formObj).subscribe(item => {
        this.jsonResponse = item;
        console.log(this.jsonResponse);
        this.router.navigate(['selectProcedure']);
      })
    }
  }



}
