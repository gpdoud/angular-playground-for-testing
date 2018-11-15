import { LogProvider } from './log.provider.class';
import { Observable, of } from 'rxjs';

export class ConsoleLogProvider extends LogProvider {

    log(message: any): Observable<boolean> {
        let msg = (typeof message) == "string" ? message : JSON.stringify(message);
        console.log(msg);
        return of<boolean>(true);
    }

    constructor() {
        super();
    }
}