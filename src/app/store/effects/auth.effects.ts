import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as authAction from '../actions/auth.actions';
import { HttpClient } from '@angular/common/http';
import { EMPTY, pipe } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadvvv$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.loadAuths),
      mergeMap(() => {
        console.log('fff');
        return this.http
          .get<{name:string,username:string}>('https://jsonplaceholder.typicode.com/users/1')
          .pipe(
            map((data) => {
              console.log(data);
              return authAction.setAuth({
                // userName: username.replace(' ', ''),
                // friendlyName: username,
                userName: data .username,
                friendlyName: data .username,
              });
            }),
            catchError(() => EMPTY)
          );
      })
    )
  );
}
