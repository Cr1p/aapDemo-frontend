import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title = 'Employe Directory';
  employeeSerch: string = '';

  constructor() { }

  ngOnInit() {
  }

  recive(evnt) {
    console.log(evnt);
    this.employeeSerch = evnt;
  }

}
