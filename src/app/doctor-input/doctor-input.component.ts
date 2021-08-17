import { Component, OnInit } from '@angular/core';
import {DoctorInput} from '../doctor-input-class/doctor-input';
import {DoctorInputService} from '../doctor-input-service/doctor-input.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-doctor-input',
  templateUrl: './doctor-input.component.html',
  styleUrls: ['./doctor-input.component.css']
})
export class DoctorInputComponent implements OnInit {
  ItemsArray!: any[];
  // ItemsArray= [];

  addNewStatus(ItemsArray){
    let inputLength = this.ItemsArray.length;
    ItemsArray.id = inputLength+1;
    this.ItemsArray.push(ItemsArray)
  }

  constructor(private doctorInputService: DoctorInputService) { }

  ngOnInit() {
    this.doctorInputService.getData().subscribe((res: any[])=>{
      this.ItemsArray= res;
      // console.log (this.ItemsArray)
    })  
  }

}


