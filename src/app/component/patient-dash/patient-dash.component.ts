import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-patient-dash',
  templateUrl: './patient-dash.component.html',
  styleUrls: ['./patient-dash.component.css']

})
export class PatientDashComponent implements OnInit {

  username: string;
  location: string;
  user_id: any
  patientsStatus: any;
  patient: any;
  patientsNames!: any[];
  newArray: any[]
  patientsStat: any[];

  constructor(private authService: AuthService, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content, {
      size: 'xl',
    });
  }
  ngOnInit(): void {

    this.username = localStorage.getItem('username')
    this.user_id = localStorage.getItem('user_id')
    this.location = localStorage.getItem('location')

    this.authService.getStatus().subscribe((res: any[]) => {
      this.patientsNames = res;
      this.newArray = this.patientsNames.filter(patienty => patienty.name === this.username)
      this.patientsStat = this.newArray.reverse();
      this.patientsStatus = this.patientsStat[0]

      if (this.patientsStat[0] == undefined) {
        this.patientsStatus = [
          {
            status: "N/A", recomendations: "None"
          }
        ];
      }
    })
  }
  patients(patients: any) {
    throw new Error('Method not implemented.');
  }

}