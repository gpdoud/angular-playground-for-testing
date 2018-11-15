import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogProvider } from './log.provider.class';

import { ConsoleLogProvider } from './console-log.provider.class';
import { DbLogProvider } from './db-log.provider.class';
import { Observable, of } from 'rxjs';

enum LogProviderOptions { Console, Db, All }

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

  log(msg: any): Observable<boolean> {
    let bool = true;
    for(let p of this.providers) {
      p.log(msg).subscribe(rc => { 
        console.log(rc); 
        bool = bool && rc; 
      });
    }
    return of(bool);
  }
  info(msg) {
    console.log(msg);
  }
  warn(msg) {
    console.warn(msg);
  }
  error(msg) {
    console.error(msg);
  }

  constructor(
    private http: HttpClient
  ) { }
}
