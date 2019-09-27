import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employee = new EventEmitter<any>();
  
  constructor() { }
}
