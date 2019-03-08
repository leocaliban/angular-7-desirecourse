import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-server]',
  // selector: '.app-server'
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverStatus = 'offline';

  constructor() { }

  ngOnInit() {
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

}
