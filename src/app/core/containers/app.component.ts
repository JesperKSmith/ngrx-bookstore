import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

/* NgRx */
import { select, Store } from '@ngrx/store';
import * as fromRoot from '@root/reducers';
import * as fromAuth from '@auth/reducers';
import { LayoutActions } from '../actions';
import { AuthActions } from '@root/auth/actions';

@Component({
  selector: 'app-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
})
export class AppComponent {

  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  closeSidenav(): void {
    this.store.dispatch(LayoutActions.closeSidenav());
  }

  openSidenav(): void {
    this.store.dispatch(LayoutActions.openSidenav());
  }

  logout(): void {
    this.closeSidenav();
    this.store.dispatch(AuthActions.logout());
  }
}
