import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthUsersService} from '../../services/auth-users.service';


@Component({
  selector: 'app-add-clinical-history',
  templateUrl: './add-clinical-history.component.html',
  styleUrls: ['./add-clinical-history.component.css']
})
export class AddClinicalHistoryComponent {

  jsonResponse: any;

  constructor(private builder: FormBuilder, private service: AuthUsersService, 
    private router: Router){ 

    }

    /**
     * Form that will be used to send the information to the auth-users.specs.ts
     */
  historyForm = this.builder.group({
    cedula_paciente: this.builder.control('', Validators.required),
    fecha_procedimiento: this.builder.control('', Validators.required),
    tratamiento: this.builder.control('', Validators.required),
    nombre_procedimiento: this.builder.control('Cesárea', Validators.required),
    cedula_Personal: this.builder.control('', Validators.required),
  })

  /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
  proceedAddHistory(){
    let formObj = this.historyForm.getRawValue(); // {name: '', description: ''}
    console.log(formObj);
    if(this.historyForm.valid){

      this.service.postClinicalHistory(formObj).subscribe(item => {
        this.jsonResponse = item;
        console.log(this.jsonResponse);
        this.router.navigate(['selectDoctor']);
      })
    }
  }
}
