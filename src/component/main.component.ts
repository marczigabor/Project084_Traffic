import { RenderComponent } from './render.component';
import { InputComponent } from './input.component';
import { BaseComponent } from './base.component';
import { EventEmitterConstant } from '../constant/event-emitter.constant';
import { Point } from '../model/point.model';
import { GraphComponent } from './visualisation/graph.component';
import { CarComponent } from './visualisation/car.component';

export class MainComponent extends BaseComponent {

    destroy() {
        super.destroy();
        this.render.destroy();
        this.input.destroy();
    }

    private render: RenderComponent;
    private input: InputComponent;
    private graph: GraphComponent;
    private car: CarComponent;

    constructor(containerDiv: HTMLDivElement) {
        super();
        this.render = new RenderComponent(containerDiv);
        this.input = new InputComponent(this.render.canvas);
        this.graph = new GraphComponent();
        this.car = new CarComponent();
        this.subscribe();
        this.gameLoop(Date.now());
    }

    private subscribe = (): void => {
        BaseComponent.eventEmitter.on(EventEmitterConstant.canvasClick, this.canvasClickListener);
        BaseComponent.eventEmitter.on(EventEmitterConstant.addCar, this.addCarListener);
    }

    private gameLoop = (timeStamp: number) => {

        this.render.draw(timeStamp, this.graph, this.car);

        // The loop function has reached it's end. Keep requesting new frames
        window.requestAnimationFrame(this.gameLoop);
    }    
    private canvasClickListener = (data: any): void =>  {
        const point = data as Point;

        this.graph.handleClick(point.x, point.y);
        this.car.handleClick(point.x, point.y);
    }

    private addCarListener = (data: any): void =>  {
        if (this.graph.graph.nodes.length > 0) {
            this.car.addCar(this.graph.graph.nodes[0].position.x, this.graph.graph.nodes[0].position.y);
        }
    }
}


