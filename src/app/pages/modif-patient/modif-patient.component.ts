import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthUsersService} from '../../services/auth-users.service';

@Component({
  selector: 'app-modif-patient',
  templateUrl: './modif-patient.component.html',
  styleUrls: ['./modif-patient.component.css']
})
export class ModifPatientComponent {
  jsonResponse: any;
  jsonResponse2: any;
  constructor(private builder: FormBuilder, private service: AuthUsersService,  
    private router: Router){}

    /**
     * Form that will be used to send the information to the auth-users.specs.ts
     */
    updateLocation = this.builder.group({
      cedula: this.builder.control('', Validators.required),
      provincia: this.builder.control('', Validators.required),
      canton: this.builder.control('', Validators.required),
      distrito: this.builder.control('', Validators.required),
    

    })

    /**
     * Form that will be used to send the information to the auth-users.specs.ts
     */
    updatePhone = this.builder.group({
      cedula: this.builder.control('', Validators.required),
      telefono: this.builder.control('', Validators.required),
    })

    /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
    proceedUpdateLocation(){
      let formObj = this.updateLocation.getRawValue(); // {name: '', description: ''}
      console.log(formObj);
      if(this.updateLocation.valid){
  
        this.service.postAddAdress(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.updateLocation.reset();
        })
      }
    }

    /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
    proceedUpdatePhone(){
      let formObj1 = this.updatePhone.getRawValue(); // {name: '', description: ''}
      console.log(formObj1);
      if(this.updatePhone.valid){
  
        this.service.postAddPhone(formObj1).subscribe(item => {
          this.jsonResponse2 = item;
          console.log(this.jsonResponse2);
          this.updatePhone.reset();
        })
      }
    }


}