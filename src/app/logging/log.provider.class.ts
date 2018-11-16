import { Observable } from "rxjs";

export abstract class LogProvider {

    abstract writeLog(message: any, level: string): Observable<boolean>;

    constructor() {}
}