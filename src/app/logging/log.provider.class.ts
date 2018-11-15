import { Observable } from "rxjs";

export abstract class LogProvider {

    abstract log(message: any): Observable<boolean>;

    constructor() {}
}