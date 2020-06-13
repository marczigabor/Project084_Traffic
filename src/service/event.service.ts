import { EventEmitter } from "./event-emitter.service";

export class EventService {
    public static eventEmitter: EventEmitter = new EventEmitter();
}