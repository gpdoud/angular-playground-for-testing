import { timeout } from "q";

export class Log {
    Id: number;
    Timestamp: string;
    Level: string;
    Message: string;

    constructor(Message: string, Level: string = "INFO") {
        this.Id = 0;
        this.Timestamp = (new Date()).toISOString();
        this.Message = Message;
        this.Level = Level;
    }
}