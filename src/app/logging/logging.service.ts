import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogProvider } from './log.provider.class';

import { ConsoleLogProvider } from './console-log.provider.class';
import { DbLogProvider } from './db-log.provider.class';
import { Observable, of } from 'rxjs';

import { LogProviderOptions } from './log-providers-options.enum';
//export enum LogProviderOptions { Console, Db, All }
import { LogLevelOptions } from './log-level-options.enum';
import { Log } from './log.class';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  providers: LogProvider[] = [];
  addProviders(providers: LogProviderOptions, dbUrl: string = null) {
    if(providers === LogProviderOptions.Console || providers === LogProviderOptions.All) {
        this.providers.push(new ConsoleLogProvider());
    } else if (providers === LogProviderOptions.Db || providers === LogProviderOptions.All) {
      if(dbUrl == null) {
        console.error("dbUrl must be set to use Db-log provider. Db option not set.");
        return;
      }
      this.providers.push(new DbLogProvider(this.http, dbUrl));
    }
  }

  private getDbLogProvider(): DbLogProvider {
    for(let provider of this.providers) {
      let dbLogProvider = provider as DbLogProvider;
      if(dbLogProvider !== null) {
        return dbLogProvider;
      }
    }
    return null;
  }

  listDbLog(): Observable<Log[]> {
    let dbLogProvider = this.getDbLogProvider();
    if(dbLogProvider === null) {
      console.error("No DbLogProvider found");
      let emptyLog: Log[] = [];
      return of(emptyLog);
    }
    return dbLogProvider.listLog();
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
