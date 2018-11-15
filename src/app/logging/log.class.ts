import { timeout } from "q";

export class Log {
    Id: number;
    Timestamp: string;
    Message: string;

    constructor(Message: string) {
        this.Id = 0;
        let date = new Date();
        this.Timestamp = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
        this.Message = Message;
    }
}