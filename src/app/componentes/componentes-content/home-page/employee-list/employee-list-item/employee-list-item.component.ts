import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss']
})
export class EmployeeListItemComponent implements OnInit {

  @Input() item: any;

  constructor(public _dataService: DataService) { }

  ngOnInit() {
  }

  sendEmployee(_employee) {
    this._dataService.employee.emit(_employee);
  }

}
