import { Component, OnInit } from '@angular/core';
import { DoctorInputService } from 'src/app/doctor-input-service/doctor-input.service';
// import {DoctorInputService} from '../doctor-input-service/doctor-input.service';
import { AuthService } from 'src/app/services/auth.service';
import { TracingRequestService } from 'src/app/tracing-http/tracing-request.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doc-dash',
  templateUrl: './doc-dash.component.html',
  styleUrls: ['./doc-dash.component.css']
})


export class DocDashComponent implements OnInit {
  username: string;
  possibleContacts!: any[];
  ItemsArray!: any[];
  possible: number;
  CaseStatus!: any[];
  user_id: any;
  positive: any[];
  negative: any[];
  pos: number;
  neg: number;



  constructor(private tracingService: TracingRequestService,private authService: AuthService,private router: Router,) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')

    this.tracingService.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;
      this.possible = this.ItemsArray.length
      this.authService.getStatus().subscribe((res: any) => {
        this.CaseStatus = res;

        this.positive = this.CaseStatus.filter(status => status.status === 'positive')
        this.pos = this.positive.length

        this.negative = this.CaseStatus.filter(status => status.status === 'negative')
        this.neg = this.negative.length
      })

    })

  }
  signOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);

  }
}
