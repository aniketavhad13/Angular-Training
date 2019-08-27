import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  @Input() data: Array<any>;
  @Output() result = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  performOperation(options) {

    switch (options) {
      case '+':
        this.result.emit(this.data[0] + this.data[1]);
        break;
      case '-':
        this.result.emit(this.data[0] - this.data[1]);
        break;
      case '*':
        this.result.emit(this.data[0] * this.data[1]);
        break;
      default:
        break;
    }

  }

}
