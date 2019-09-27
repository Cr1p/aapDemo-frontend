import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {

  title = 'Employee';

  employee: any = {    
    detail: {
    }
  };


  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.employee.subscribe(_el => {
      this.employee = _el;
      console.log(_el)
    })
  }

}
