import { Car } from "../../model/car.model";
import { IRendering } from "../../interfaces/irendering";
import { VisualisationBaseComponent } from "./visualisation-base.component";

export class CarComponent extends VisualisationBaseComponent{

    private _cars: Car[];

    constructor() {
        super();
        this._cars = [];
    }

    public get cars(): Car[] {
        return this._cars;
    }

    public addCar(x: number, y: number): void {
        this._cars.push(new Car(x, y));
    }

    render(context: CanvasRenderingContext2D): void {
        this._cars.forEach(car => {
            car.render(context);
        });
    }

    public handleClick(x: number, y: number): void {
    }
}