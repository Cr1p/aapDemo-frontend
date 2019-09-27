import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {

  title = 'Employee';

  constructor() { }

  ngOnInit() {
  }

}
