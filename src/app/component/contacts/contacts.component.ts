import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TracingRequestService } from 'src/app/tracing-http/tracing-request.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  username: string;

  ItemsArray!: any[];

  constructor(private tracingService: TracingRequestService) { }

  ngOnInit(): void {

    this.username = localStorage.getItem('username')

    this.tracingService.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;

    })
    
  }

}
