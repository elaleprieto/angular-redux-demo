import { Component } from '@angular/core';
import { IAppState } from './store';
import { INCREMENTAR } from './actions';
import { NgRedux, select } from "@angular-redux/store";

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select() readonly counter$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }
  
  incrementar() {
    this.ngRedux.dispatch({ type: INCREMENTAR });
  }
}
