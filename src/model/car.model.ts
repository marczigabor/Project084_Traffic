import { Point } from "./point.model";
import { IRendering } from "../interfaces/irendering";
import { Node } from "./node.model";
import { CalculationService } from "../service/Calculation.service";
import { EventService } from "../service/event.service";
import { EventEmitterConstant } from "../constant/event-emitter.constant";
import { CarDestination } from "./car-destination.model";

export class Car implements IRendering {

    private _id: string; 
    private _speed: number;
    private _position: Point 
    private _radius: number;
    private _endNode: Node;
    private _arrived: boolean;

    constructor(id: string, x: number, y: number, node: Node) {
        this._id = id;
        this._position = new Point(x, y);
        this._radius = 10;
        this._speed = Math.random() * 50 + 20;
        this._endNode = node;
    }

    public get id(): string {
        return this._id;
    }

    public render(context: CanvasRenderingContext2D, fps: number): void {

        if (!this._position.eq(this._endNode.position)) {
            const nextPoint = this.getNextPoint(fps);
            if (nextPoint) {
                this._position = nextPoint;
            }
        } else {
            this.setEnd();
        }

        context.beginPath();
        context.arc(this._position.x, this._position.y, this._radius, 0, 2 * Math.PI );
        context.fillStyle = 'black';
        context.fill();
        context.closePath();

    }

    public setDestination(node: Node) {
        this._arrived = false;
        this._endNode = node;
    }

    private setEnd() {
        if (!this._arrived) {
            this._arrived = true;
            EventService.eventEmitter.emit(EventEmitterConstant.carArrived, new CarDestination(this._id, this._endNode));
        }
    }

    private getNextPoint(fps: number): Point {

        const distance = CalculationService.getDistance(this._position, this._endNode.position);
        const time = distance / this._speed;
        const frames = time * fps;
        
        if (frames !== 0) {
            const x = (this._endNode.position.x - this._position.x) / frames;
            const y = (this._endNode.position.y - this._position.y) / frames;
            return new Point(this._position.x + x, this._position.y + y);
        } else {
            return null;
        }
    }
}