import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit, OnDestroy {

  title = 'Employee';

  // employee: any = {
  //   detail: {
  //   }
  // };
  employeeSuscription: Subscription;


  constructor(public dataService: DataService) { }

  ngOnInit() {
    // this.employeeSuscription = this.dataService.employee.subscribe(_el => {
    //   this.employee = _el;
    //   console.log(_el)
    // })
  }

  ngOnDestroy() {
    // this.employeeSuscription.unsubscribe();
  }

}
