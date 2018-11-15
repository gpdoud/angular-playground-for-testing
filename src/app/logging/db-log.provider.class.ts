import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LogProvider } from './log.provider.class';
import { Log } from './log.class';

export class DbLogProvider extends LogProvider {

    log(message: any): Observable<boolean> {
        let log = new Log((typeof message) == "string" ? message : JSON.stringify(message));
        return this.http.post("http://localhost:53911/api/logs", log) as Observable<boolean>
    }

    constructor(
        private http: HttpClient
    ) {
        super();
    }
}