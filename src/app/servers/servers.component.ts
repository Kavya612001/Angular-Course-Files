import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', //selected like an attribute
  // selector: '.app-servers', //selected like a class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Test sever';


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  OnCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // typecasting is done below
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

}
