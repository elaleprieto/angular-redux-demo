import { Component } from '@angular/core';
import { NgRedux } from "ng2-redux";
import { IAppState } from './store';
import { INCREMENTAR } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contador = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }
  
  incrementar() {
    this.ngRedux.dispatch({ type: INCREMENTAR });
  }
}
