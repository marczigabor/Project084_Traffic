import { EventEmitter } from "../service/event-emitter.service";
import { IComponent } from "./icomponent";

export abstract class BaseComponent implements IComponent {
    
    protected subscribes: Array<() => void>;

    protected static eventEmitter: EventEmitter = new EventEmitter();

    public destroy(): void {
        this.subscribes.forEach( subscription => subscription());
    }

    /**
     *
     */
    constructor() {
        this.subscribes = [];
    }

}