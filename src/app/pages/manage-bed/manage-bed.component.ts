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

  appointment = this.builder.group({
    cedula: this.builder.control('', Validators.required),
    fecha_ingreso: this.builder.control('', Validators.required),
  })

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
