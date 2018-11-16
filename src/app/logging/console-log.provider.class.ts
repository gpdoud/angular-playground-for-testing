import { LogProvider } from './log.provider.class';
import { Observable, of } from 'rxjs';
import { Log } from './log.class';

export class ConsoleLogProvider extends LogProvider {

    writeLog(message: any, level: string): Observable<boolean> {
        let log = new Log((typeof message) == "string" ? message : JSON.stringify(message));
        log.Level = level;
        console.log(log);
        return of<boolean>(true);
    }

    constructor() {
        super();
    }
}