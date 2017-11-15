import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  public avatar: string = null;
  public username: string = null;
  public auth;
  constructor(private userService: UserService) {
    this.auth = userService.getAuthState();
  }


   ngOnInit() {
    this.username = this.userService.getUsername();
    this.avatar = this.userService.getAvatar();
  }
}