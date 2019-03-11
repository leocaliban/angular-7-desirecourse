import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type: 'server',
    name: 'Testeserver',
    content: 'Just a test!'
  }];
  newServerName = '';
  newServerContent = '';

  onServerAdded(eventServerData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: eventServerData.serverName,
      content: eventServerData.serverContent
    });
  }

  onBlueprintAdded(eventBluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: eventBluePrintData.serverName,
      content: eventBluePrintData.serverContent
    });
  }
}
