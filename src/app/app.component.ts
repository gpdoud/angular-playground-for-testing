import { Component } from '@angular/core';
import { LoggingService } from './logging/logging.service';
enum LogProviderOptions { Console, Db, All };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground-for-testing';

  constructor(
    private logsvc: LoggingService
  ) {
    logsvc.addProviders(LogProviderOptions.Db);
    logsvc.log("Logging service worked!")
      .subscribe(rc => {
        console.log("Log rc:", rc);
      })
  }
}
