import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss']
})
export class EmployeeListItemComponent implements OnInit {

  @Input()item: any;

  constructor() { }

  ngOnInit() {
  }

}
