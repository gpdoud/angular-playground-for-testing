import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogProvider } from './log.provider.class';

import { ConsoleLogProvider } from './console-log.provider.class';
import { DbLogProvider } from './db-log.provider.class';
import { Observable, of } from 'rxjs';

import { LogProviderOptions } from './log-providers-options.enum';
//export enum LogProviderOptions { Console, Db, All }
import { LogLevelOptions } from './log-level-options.enum';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  

  providers: LogProvider[] = [];
  addProviders(providers: LogProviderOptions) {
    switch(providers) {
      case LogProviderOptions.Console:
        this.providers.push(new ConsoleLogProvider());
        break;
      case LogProviderOptions.Db: 
        this.providers.push(new DbLogProvider(this.http));
        break;
      case LogProviderOptions.All:
        this.providers.push(new ConsoleLogProvider());
        this.providers.push(new DbLogProvider(this.http));
      break;
    }
  }

  writeLog(msg: any, level: LogLevelOptions): Observable<boolean> {
    let bool = true;
    for(let p of this.providers) {
      p.writeLog(msg, level).subscribe(rc => { 
        bool = bool && rc; 
      });
    }
    return of(bool);
  }
  log(msg: any): Observable<boolean> {
    return this.info(msg);
  }
  info(msg: any): Observable<boolean> {
    return this.writeLog(msg, LogLevelOptions.Info);
  }
  warn(msg: any): Observable<boolean> {
    return this.writeLog(msg, LogLevelOptions.Warn);
  }
  error(msg: any): Observable<boolean> {
    return this.writeLog(msg, LogLevelOptions.Error);
  }
  fatal(msg: any): Observable<boolean> {
    return this.writeLog(msg, LogLevelOptions.Fatal);
  }

  constructor(
    private http: HttpClient
  ) { }
}
