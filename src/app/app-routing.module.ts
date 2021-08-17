import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { DocDashComponent } from './component/doc-dash/doc-dash.component';
import { PatientDashComponent } from './component/patient-dash/patient-dash.component';
import { PatientInputFormComponent } from './patient-input-form/patient-input-form.component';
import { DoctorInputFormComponent } from './doctor-input-form/doctor-input-form.component';
import { ResultsComponent } from './results/results.component';
import { DoctorInputComponent } from './doctor-input/doctor-input.component';
import { MapComponent } from './component/map/map.component';
import { PatientsComponent } from './component/patients/patients.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home/signin', component: SigninComponent },
  { path: 'home/signup', component: SignupComponent },
  { path: 'home', component: LandingpageComponent },
  { path: 'doctor', component: DocDashComponent },
  { path: 'patient', component: PatientDashComponent },
  { path:'patientinput', component: PatientInputFormComponent },
  { path:'docinput', component: DoctorInputFormComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'doccomponent', component:  DoctorInputComponent},
  {path: 'googlemaps', component: MapComponent}, 
  {path:'patients',component: PatientsComponent},


  // { pathMatch: 'full', redirectTo: 'home', path: '' },
  { path: '**', component: PageNotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






