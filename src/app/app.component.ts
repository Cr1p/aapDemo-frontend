import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appDemo';
  constructor(private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._router.navigate(['formulario']);
  }
  goToModule(mod) {
    this._router.navigate(['/' + mod]);
  }
}
