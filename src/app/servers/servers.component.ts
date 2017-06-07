import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowUpdateUserName = false;
  serverCreationStatus = 'No new server was created!';
  serverName = 'Test Server';
  userName = 'Rocco';
  updateUserNameStatus = 'User name not updated!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      this.allowUpdateUserName = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onNewUserName() {
    this.updateUserNameStatus = 'User name updated successfully! New user name is ' + this.userName;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
