import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  username: string;

  ItemsArray!: any[];
  counter:number;
  all_patients!:any[];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUsers().subscribe((res: any[]) => {
      this.ItemsArray = res;
      console.log(this.ItemsArray)
      this.all_patients=this.ItemsArray.filter(role => role.role === 'is_patient');
      this.counter = this.all_patients.length
      console.log(this.counter);


  })

  }
}
