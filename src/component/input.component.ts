import { BaseComponent } from "./base.component";
import { EventEmitterConstant } from "../constant/event-emitter.constant";
import { Point } from "../model/point.model";

export class InputComponent extends BaseComponent {
    
    destroy(): void {
        super.destroy();
        this.canvas.removeEventListener("click", this.clickListener);
    }
    
    public readonly canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        super();
        this.canvas = canvas;
        this.addEventListeners();
    }

    private clickListener = (ev: MouseEvent): void => {
        const x = ev.clientX - this.canvas.offsetLeft;
        const y = ev.clientY - this.canvas.offsetTop;
        BaseComponent.eventEmitter.emit(EventEmitterConstant.canvasClick, new Point(x, y) );
    };

    private addEventListeners = () => {
        this.canvas.addEventListener("click", this.clickListener);
    }

}

