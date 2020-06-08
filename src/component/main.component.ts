import { RenderComponent } from './render.component';
import { InputComponent } from './input.component';
import { BaseComponent } from './base.component';
import { EventEmitterConstant } from '../constant/event-emitter.constant';
import { Point } from '../model/point.model';
import { GraphComponent } from './graph.component';

export class MainComponent extends BaseComponent {

    destroy() {
        super.destroy();
        this.render.destroy();
        this.input.destroy();
    }

    private render: RenderComponent;
    private input: InputComponent;
    private graph: GraphComponent;

    constructor(containerDiv: HTMLDivElement) {
        super();
        this.render = new RenderComponent(containerDiv);
        this.input = new InputComponent(this.render.canvas);
        this.graph = new GraphComponent();
        this.subscribe();
        this.gameLoop(Date.now());
    }

    private subscribe = (): void => {
        BaseComponent.eventEmitter.on(EventEmitterConstant.canvasClick, this.canvasClickListener);
    }

    private gameLoop = (timeStamp: number) => {

        this.render.draw(timeStamp, this.graph.graph);

        // The loop function has reached it's end. Keep requesting new frames
        window.requestAnimationFrame(this.gameLoop);
    }    
    private canvasClickListener = (data: any): void =>  {
        const point = data as Point;

        this.graph.handleClick(point.x, point.y);
    }

}


