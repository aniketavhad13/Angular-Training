import { CommonService } from './../../../shared/services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  title: string = "Angular Training";

  constructor(private common: CommonService) { }

  ngOnInit() {
  }

  onButtonA(){
    let random = Math.random();
    console.log(random);
    this.common.sharedData.next(random);
  }

  onButtonB(){
    this.common.sharedData.subscribe(res =>{
      console.log(res);
    })
  }

}
