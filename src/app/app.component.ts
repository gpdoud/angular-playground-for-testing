import { Component } from '@angular/core';
import { LoggingService } from './logging/logging.service';
import { LogProviderOptions } from './logging/log-providers-options.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground-for-testing';
  obj = {
    id: 0,
    name: 'test'
  };

  constructor(
    private logsvc: LoggingService
  ) {
    let dbUrl = "http://localhost:53911/api/logs";
    logsvc.addProviders(LogProviderOptions.Db, dbUrl);
    logsvc.log("Logging initialized ...");
  }
}
