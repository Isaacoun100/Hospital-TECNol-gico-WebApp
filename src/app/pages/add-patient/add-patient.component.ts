import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthUsersService} from '../../services/auth-users.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,  
    private router: Router){}

    jsonResponse: any;

    /**
     * Form that will be used to send the information to the auth-users.specs.ts
     */

    createPatientForm = this.builder.group({
      cedula: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required),
      nombre: this.builder.control('', Validators.required),
      apellido_1: this.builder.control('', Validators.required),
      apellido_2: this.builder.control('', Validators.required),
      fecha_nac: this.builder.control('', Validators.required),
      sexo: this.builder.control('', Validators.required),
      edad: this.builder.control( 0, Validators.required)

    })

    /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */

    
    proceedCreatePatient(){
      let formObj = this.createPatientForm.getRawValue(); // {name: '', description: ''}
      console.log(formObj);
      if(this.createPatientForm.valid){
  
        this.service.postUserPatient(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['loginPatient']);
        })
      }
    }
  }
  

