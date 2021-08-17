import { Component, OnInit } from '@angular/core';
import { Results } from '../results-class/results';
import { ResultsRequestService } from '../results-service/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  searchText: string;

  ItemsArray!: Results[];
  public search: any = '';
  locked: any[] = [];

  addNewInput(ItemsArray) {
    let inputLength = this.ItemsArray.length;
    ItemsArray.id = inputLength + 1;
    this.ItemsArray.push(ItemsArray)
  }

  constructor(private resultRequestService: ResultsRequestService) { }

  ngOnInit() {
    this.resultRequestService.getData().subscribe((res: any[]) => {
      this.ItemsArray = res;
    })
  }

  public async selected(event, id: number):
    Promise<void> {
    this.resultRequestService.onDoctorSelect.next(id);
  }

}






