import { BaseComponent } from "./base.component";
import { Graph } from "../model/graph.model";
import { Car } from "../model/car.model";
import { GraphComponent } from "./visualisation/graph.component";
import { CarComponent } from "./visualisation/car.component";

export class RenderComponent extends BaseComponent {
    
    private oldTimeStamp: number;
    private fps: number;

    destroy(): void {
    }

    public readonly canvas: HTMLCanvasElement;
    public readonly context: CanvasRenderingContext2D;

    constructor(containerDiv: HTMLDivElement) {
        super();

        this.canvas = document.createElement('canvas');
        this.canvas.width = containerDiv.clientWidth;
        this.canvas.height = containerDiv.clientHeight;
        containerDiv.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
    }

    public draw = (timeStamp: number, graphComponent: GraphComponent, carComponent: CarComponent): void => {

        // Calculate the number of seconds passed since the last frame
        const secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;
    
        // Calculate fps
        this.fps = Math.round(1 / secondsPassed);
    
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        graphComponent.render(this.context);
        carComponent.render(this.context);
    }

    private drawGraph = (graph: Graph): void => {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (graph) {

            graph.render(this.context);
           
        }

    }
}

