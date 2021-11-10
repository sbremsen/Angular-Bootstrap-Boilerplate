import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import * as actions from 'src/app/auth/store/auth.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onGuestLogin() {
    debugger;
    const guestEmail= environment.guestLoginEmail;
    const guestPwd= environment.guestLoginPwd;
    const loginPayload = { email: guestEmail, password: guestPwd}
    this.store.dispatch(new actions.LoginRequested(loginPayload));
  }

}
