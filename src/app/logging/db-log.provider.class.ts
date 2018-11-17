import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LogProvider } from './log.provider.class';
import { Log } from './log.class';

export class DbLogProvider extends LogProvider {

    writeLog(message: any, level: string): Observable<boolean> {
        let log = new Log((typeof message) == "string" ? message : JSON.stringify(message));
        log.Level = level;
        return this.http.post(this.dbUrl, log) as Observable<boolean>
    }

    listLog(): Observable<Log[]> {
        return this.http.get(this.dbUrl) as Observable<Log[]>;
    }

    constructor(
        private http: HttpClient,
        private dbUrl: string = null
    ) {
        super();
    }
}