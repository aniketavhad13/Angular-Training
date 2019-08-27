import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-pipe',
  templateUrl: './default-pipe.component.html',
  styleUrls: ['./default-pipe.component.scss']
})
export class DefaultPipeComponent implements OnInit {

  title = 'Welcome to Angular Training!';
  currentDate = new Date();
  randomNumber: number = 136578238;

  constructor() { }

  ngOnInit() {
  }

}
