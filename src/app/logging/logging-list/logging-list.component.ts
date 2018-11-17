import { Component, OnInit } from '@angular/core';

import { LoggingService } from '../logging.service';
import { Log } from '../log.class';

@Component({
  selector: 'app-logging-list',
  templateUrl: './logging-list.component.html',
  styleUrls: ['./logging-list.component.css']
})
export class LoggingListComponent implements OnInit {

  logs: Log[];

  constructor(
    private logsvc: LoggingService
  ) { }

  ngOnInit() {
    this.logsvc.listDbLog()
      .subscribe(
        logs => {
          console.log(logs);
          this.logs = logs;
        },
        err => {
          console.error(err);
        }
      )
  }

}
