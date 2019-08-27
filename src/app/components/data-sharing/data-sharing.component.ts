import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.scss']
})
export class DataSharingComponent implements OnInit {

  finalResult : any = 0;

  constructor() { }

  ngOnInit() {
  }

  getResult(event) {
    this.finalResult = event;
  }

}
