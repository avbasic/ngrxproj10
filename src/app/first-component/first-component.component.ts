import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/reducers';
import * as authAction from '../store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() :void {
    this.store.dispatch(authAction.loadAuths());
    this.name$=this.store.select(fromRoot.getFrindlyName)

  }
}
