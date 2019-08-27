import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {

  filterText: string = '';
  countries: Array<any> = ['India', 'Australia', 'England', 'Singapore', 'New Zealand'];

  constructor() { }

  ngOnInit() {
  }

}


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if ((value && value.length > 0) && args) {
      return value.filter((item) => item.toLowerCase().indexOf(args.toLowerCase()) > -1)
    } else {
      return value;
    }
  }

}
