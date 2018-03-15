import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataserviceService {

private messsageSource = new BehaviorSubject<string>("Default Message");
currentMessage = this.messsageSource.asObservable();
  constructor() { }

  changeMessage(message: string) {
    this.messsageSource.next(message)
  }
}
