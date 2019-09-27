import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-content',
  templateUrl: './formulario-content.component.html',
  styleUrls: ['./formulario-content.component.scss']
})
export class FormularioContentComponent implements OnInit {

  generoList: any = [
    { id: 1, valor: 'Masculino' },
    { id: 2, valor: 'Femenino' }
  ]
  constructor() { }

  employee: any

  ngOnInit() {
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.datepicker');
    //   var instances = M.Datepicker.init(elems, options);
    // });

  }



}
