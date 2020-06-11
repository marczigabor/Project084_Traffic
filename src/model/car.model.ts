import { Point } from "./point.model";
import { IRendering } from "../interfaces/irendering";

export class Car implements IRendering {

    private _speed: number;
    private _position: Point 
    private _radius: number;

    constructor(x: number, y: number) {
        this._position = new Point(x, y);
        this._radius = 10;
    }

    render(context: CanvasRenderingContext2D): void {

        context.beginPath();
        context.arc(this._position.x, this._position.y, this._radius, 0, 2 * Math.PI );
        context.fillStyle = 'black';
        context.fill();
        context.closePath();        
    }

}