import { Component, OnInit, Directive, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss']
})
export class CustomDirectiveComponent implements OnInit {

  result = 0;

  constructor() { }

  ngOnInit() {
  }

  onResult(evt){
    this.result = evt;
  }

}


@Directive({
  selector: '[myCustomDir]'
})
export class CustomDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onmouseOver() {
    this.el.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseout') onmouseOut() {
    this.el.nativeElement.style.color = 'green';
  }

}
