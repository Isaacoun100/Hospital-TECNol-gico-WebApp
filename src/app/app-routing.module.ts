import { CompleteReservationComponent } from './pages/complete-reservation/complete-reservation.component';
import { SeeClinicalHistoryComponent } from './pages/see-clinical-history/see-clinical-history.component';
import { AddClinicalHistoryComponent } from './pages/add-clinical-history/add-clinical-history.component';
import { SelectProcedureComponent } from './pages/select-procedure/select-procedure.component';
import { SelectPatientComponent } from './pages/select-patient/select-patient.component';
import { LoginPatientComponent } from './pages/login-patient/login-patient.component';
import { SelectDoctorComponent } from './pages/select-doctor/select-doctor.component';
import { ModifPatientComponent } from './pages/modif-patient/modif-patient.component';
import { LoginDoctorComponent } from './pages/login-doctor/login-doctor.component';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { ManageBedComponent } from './pages/manage-bed/manage-bed.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'completeReservation', component:CompleteReservationComponent},
  {path:'addClinicalHistory', component:AddClinicalHistoryComponent},
  {path:'seeClinicalHistory', component:SeeClinicalHistoryComponent},
  {path:'selectProcedure', component:SelectProcedureComponent},
  {path:'selectPatient', component:SelectPatientComponent},
  {path:'selectDoctor', component:SelectDoctorComponent},
  {path:'loginPatient', component:LoginPatientComponent},
  {path:'loginDoctor', component:LoginDoctorComponent},
  {path:'addPatient', component:AddPatientComponent},
  {path:'manageBed', component:ManageBedComponent},
  {path:'modifPatient', component:ModifPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
