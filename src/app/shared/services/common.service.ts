import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sharedData = new BehaviorSubject(null);
  sharedData1 = new Subject<any>();

  constructor() { }
}
