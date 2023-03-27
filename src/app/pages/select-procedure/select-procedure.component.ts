import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthUsersService} from '../../services/auth-users.service';
import {Reservacion} from './Reservacion';


@Component({
  selector: 'app-select-procedure',
  templateUrl: './select-procedure.component.html',
  styleUrls: ['./select-procedure.component.css']
})
export class SelectProcedureComponent {

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */
  jsonResponse: any;
  myInteger: number = 0;

  
  constructor(private builder: FormBuilder, private service: AuthUsersService,  
    private router: Router){}

    procedureForm = this.builder.group({
      procedimiento_nombre: this.builder.control('', Validators.required),
    
    })

     getLastInsertedReservation(): number{
      if(this.procedureForm.valid){
        this.service.getLastInsertedReservation().subscribe(item =>{
          this.jsonResponse = item;
          this.myInteger = this.jsonResponse.result.id;
          
        })
      }
      console.log(this.myInteger);
      return this.myInteger;
    }

    proceedProcedureForm(){
      const myIDMethod: number = this.getLastInsertedReservation();
      let myObject: Reservacion = new Reservacion(myIDMethod, this.procedureForm.value.procedimiento_nombre);

  

      console.log(myObject);
      if(this.procedureForm.valid){
  
        this.service.postProcedureReservation(myObject).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          //this.router.navigate(['loginPatient']);
        })
      }
    }

}
