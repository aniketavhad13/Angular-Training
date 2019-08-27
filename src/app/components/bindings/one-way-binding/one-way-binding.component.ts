import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {

  title: string = 'Angular Training';
  isDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleMe() {
    this.isDisabled = !this.isDisabled;
  }

}
