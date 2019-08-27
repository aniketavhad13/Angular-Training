import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {

  isVisible: boolean = true;
  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];

  emotion: string = 'happy';
  selectedMonth: string = '';

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
      this.selectedMonth = event.target.value;
  }

}
