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

    updateLocation = this.builder.group({
      cedula: this.builder.control('', Validators.required),
      provincia: this.builder.control('', Validators.required),
      canton: this.builder.control('', Validators.required),
      distrito: this.builder.control('', Validators.required),
    

    })

    updatePhone = this.builder.group({
      cedula: this.builder.control('', Validators.required),
      telefono: this.builder.control('', Validators.required),
    })

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