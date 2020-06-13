import { BaseComponent } from "./base.component";
import { EventEmitterConstant } from "../constant/event-emitter.constant";
import { Point } from "../model/point.model";
import { EventService } from "../service/event.service";

export class InputComponent extends BaseComponent {
    
    private readonly canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        super();
        this.canvas = canvas;
        this.addEventListeners();
    }

    destroy(): void {
        this.canvas.removeEventListener("click", this.clickListener);
        document.removeEventListener("keydown", this.keydownListener);
    }

    private clickListener = (ev: MouseEvent): void => {
        const x = ev.clientX - this.canvas.offsetLeft;
        const y = ev.clientY - this.canvas.offsetTop;
        EventService.eventEmitter.emit(EventEmitterConstant.canvasClick, new Point(x, y));
    };

    private keydownListener = (ev: KeyboardEvent) => {
        // add auto
        switch (ev.key) {
            case 'a':  // add a new car
                EventService.eventEmitter.emit(EventEmitterConstant.addCar, null);
                break;
            case 's':  // hide nodes and edges
                EventService.eventEmitter.emit(EventEmitterConstant.edgesNodesVisibility, null);
                break;
        }
    }

    private addEventListeners = () => {
        this.canvas.addEventListener("click", this.clickListener);
        document.addEventListener("keydown", this.keydownListener);
    }

}

