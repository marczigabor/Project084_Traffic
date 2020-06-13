import { Car } from "../../model/car.model";
import { IRendering } from "../../interfaces/irendering";
import { VisualisationBaseComponent } from "./visualisation-base.component";
import { Node } from "../../model/node.model";
import { StringService } from "../../service/string.service";
import { EventService } from "../../service/event.service";
import { EventEmitterConstant } from "../../constant/event-emitter.constant";
import { CarDestination } from "../../model/car-destination.model";

export class CarComponent extends VisualisationBaseComponent{

    private _cars: Car[];

    constructor() {
        super();
        this._cars = [];
        this.subscribe();
    }

    public destroy(): void {
        this._cars = null;
    }

    public get cars(): Car[] {
        return this._cars;
    }

    public addCar(x: number, y: number, node: Node): void {
        this._cars.push(new Car(StringService.generateString(10), x, y, node));
    }

    public render(context: CanvasRenderingContext2D, fps: number): void {
        this._cars.forEach(car => {
            car.render(context, fps);
        });
    }

    public handleClick(x: number, y: number): void {
    }

    private subscribe(): void {
        EventService.eventEmitter.on(EventEmitterConstant.carDepartures, this.carDeparturesListener);
    }

    private carDeparturesListener = (data: any) => {
        const carDestination = data as CarDestination; 

        const car = this._cars.find( x=> x.id === carDestination.id);

        if (car) {
            car.setDestination(carDestination.node);
        }
    }
} 