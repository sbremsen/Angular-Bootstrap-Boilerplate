import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../auth/models/user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;

  @Output() logout = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit(this.user);
  }

  displayProfile() {
    debugger;
    if (this.user.uid === environment.guestUid) {
      return false;
    }
    return true;
  }

}
