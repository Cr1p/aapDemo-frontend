import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnChanges {

  @Input() employeeSerch;

  itemsList = [
    {
      title: 'Daniela Cornejo',
      position: 'CEO Developer Junior',
      detail:{
        call_office: '9999-9999',
        call_mobile: '95959-75877',
        sms: '5656-555-555',
        mail:'asasda@mail.com',

      }
    },
    {
      title: 'Miguel Yoris',
      position: 'Diseñador',
      detail:{
        call_office: '8888-8888',
        call_mobile: '7777-77777',
        sms: '444-333-111',
        mail:'migue_@mail.com',

      }
    },
    {
      title: 'Estanislao Yoris',
      position: 'Arquitecto',
      detail:{
        call_office: '85858-3333',
        call_mobile: '1231-132123',
        sms: '123-444-212',
        mail:'estanislao@mail.com',

      }
    },
    {
      title: 'Ricardo Lam ',
      position: 'Jefe de Proyecto',
      detail:{
        call_office: '12341-41234',
        call_mobile: '123-12312',
        sms: '444-333-111',
        mail:'rlam@mail.com',

      }
    },
    {
      title: 'Carlos Franco',
      position: 'Jefe de TI',
      detail:{
        call_office: '112-4123',
        call_mobile: '123-1231',
        sms: '765-222-1231',
        mail:'Carlos_Framnco@mail.com',

      }
    }
  ];
  _itemsList: any[] = [];


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('ngOnChanges--->  EmployeeListComponent', this.employeeSerch);
    this._itemsList = this.employeeSerch ? this.itemsList.filter(_it => _it.title.indexOf(this.employeeSerch)!= -1 ) : this.itemsList;
    console.log(this._itemsList)

      // this._planTrabajo ? (this.actoMedico.planTrabajo.indexOf(this._planTrabajo) == -1 ? false : true) : true;

  }
}
