import { SeeClinicalHistoryComponent } from './pages/see-clinical-history/see-clinical-history.component';
import { AddClinicalHistoryComponent } from './pages/add-clinical-history/add-clinical-history.component';
import { SelectPatientComponent } from './pages/select-patient/select-patient.component';
import { LoginPatientComponent } from './pages/login-patient/login-patient.component';
import { SelectDoctorComponent } from './pages/select-doctor/select-doctor.component';
import { LoginDoctorComponent } from './pages/login-doctor/login-doctor.component';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { ManageBedComponent } from './pages/manage-bed/manage-bed.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'addClinicalHistory', component:AddClinicalHistoryComponent},
  {path:'seeClinicalHistory', component:SeeClinicalHistoryComponent},
  {path:'selectPatient', component:SelectPatientComponent},
  {path:'selectDoctor', component:SelectDoctorComponent},
  {path:'loginPatient', component:LoginPatientComponent},
  {path:'loginDoctor', component:LoginDoctorComponent},
  {path:'addPatient', component:AddPatientComponent},
  {path:'manageBed', component:ManageBedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
