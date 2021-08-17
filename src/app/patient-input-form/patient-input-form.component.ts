import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { PatientInputService } from '../patient-input.service';
import { Results } from '../results-class/results';
import { ResultsRequestService } from '../results-service/results.service';


@Component({
  selector: 'app-patient-input-form',
  templateUrl: './patient-input-form.component.html',
  styleUrls: ['./patient-input-form.component.css']
})
export class PatientInputFormComponent implements OnInit {

  storedlocation: any;
  storedcoord: any;
  storedcity: any;
  newInput: any = {
    // user: null,
    name: null,
    symptoms: null,
    // location: null,
  };
  patientInput: any = {
    user: null,
    name: null,
    symptoms: null,
    location: null,
  };
  user_id: any;

  constructor(private resultsService: PatientInputService) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id')
    console.log(this.user_id)
    this.storedlocation = localStorage.getItem("address");
    console.log(this.storedlocation)
    this.storedcoord = localStorage.getItem("coordinates");
  }

  submitInput(): void {
    this.storedlocation = localStorage.getItem("address");
    this.storedcoord = localStorage.getItem("coordinates");
    this.storedcity = localStorage.getItem("locality")
    console.log(this.storedlocation)
    this.user_id = localStorage.getItem('user_id')
    let location = this.storedlocation +','+ this.storedcity
    let user = this.user_id
    console.log(user)
    let { name, symptoms } = this.newInput;
    this.patientInput = { user, name, location, symptoms }
    console.log(this.patientInput)

    this.resultsService.addPatient(user, name, location, symptoms).subscribe(
      data => {
        console.log(data);
      },
    );
    window.location.reload();
  }
  // reloadCurrentPage() {
  //   window.location.reload();
  //  }

}