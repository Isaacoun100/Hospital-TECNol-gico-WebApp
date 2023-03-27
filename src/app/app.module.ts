import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedpage/navbar/navbar.component';
import { FooterComponent } from './sharedpage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPatientComponent } from './pages/login-patient/login-patient.component';
import { LoginDoctorComponent } from './pages/login-doctor/login-doctor.component';
import { SelectPatientComponent } from './pages/select-patient/select-patient.component';
import { SeeClinicalHistoryComponent } from './pages/see-clinical-history/see-clinical-history.component';
import { ManageBedComponent } from './pages/manage-bed/manage-bed.component';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { SelectDoctorComponent } from './pages/select-doctor/select-doctor.component';
import { AddClinicalHistoryComponent } from './pages/add-clinical-history/add-clinical-history.component';
import { SelectProcedureComponent } from './pages/select-procedure/select-procedure.component';
import { CompleteReservationComponent } from './pages/complete-reservation/complete-reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifPatientComponent } from './pages/modif-patient/modif-patient.component';
import { DeleteAppointmentComponent } from './pages/delete-appointment/delete-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginPatientComponent,
    LoginDoctorComponent,
    SelectPatientComponent,
    SeeClinicalHistoryComponent,
    ManageBedComponent,
    AddPatientComponent,
    SelectDoctorComponent,
    AddClinicalHistoryComponent,
    SelectProcedureComponent,
    CompleteReservationComponent,
    ModifPatientComponent,
    DeleteAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
