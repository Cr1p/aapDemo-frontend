import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnChanges {

  @Input() employeeSerch;

  itemsList: any[] = [
    {
      title: 'Daniela Cornejo',
      position: 'CEO Developer Junior'
    },
    {
      title: 'Miguel Yoris',
      position: 'Diseñador'
    }
  ];
  _itemsList: any[] = [];


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('ngOnInit--->  actoMedico', this.employeeSerch);
    this._itemsList = this.employeeSerch ? this.itemsList.fill(_it => _it.indexOf(this.employeeSerch)) : this.itemsList;
      // this._planTrabajo ? (this.actoMedico.planTrabajo.indexOf(this._planTrabajo) == -1 ? false : true) : true;

  }
}
