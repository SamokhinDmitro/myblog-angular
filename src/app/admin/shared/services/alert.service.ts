import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';



export type AlerType = 'success' | 'warning' | 'danger';

export interface Alert {
  type: string;
  text: string;
}

@Injectable()
export class AlertService {

  public alert$ = new Subject<Alert>();

  constructor() { }

  success(text: string) {
    return this.alert$.next({type: 'success', text});
  }

  warning(text: string) {
    this.alert$.next({type: 'warning', text});
  }

  danger(text: string) {
    this.alert$.next({type: 'danger', text});
  }
}
