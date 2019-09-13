import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit, OnChanges {

  isVisible: boolean = true;
  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];

  emotion: string = 'happy';
  selectedMonth: string = '';

  @Input() data: any;
  @Output() addResult = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    console.log(this.data);
  }

  onChange(event) {
      this.selectedMonth = event.target.value;
  }

  onAdd(){
    let add = this.data[0] + this.data[1];
    this.addResult.emit(add);
  }

}
