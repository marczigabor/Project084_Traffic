import { EventEmitter } from "../service/event-emitter.service";
import { IComponent } from "./interface/icomponent";

export abstract class BaseComponent {

    public abstract destroy(): void;

    constructor() {
    }

}