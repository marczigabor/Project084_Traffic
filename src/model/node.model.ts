import { IRendering } from "../interfaces/irendering";
import { Point } from "./point.model";
import { Edge } from "./edge.model";

export class Node implements IRendering {

    private readonly _id: string;
    private readonly _label: string;
    private _selected: boolean;
    private _position: Point;
    private _edges: Edge[];
    private readonly _radius: number;

    constructor(    
        id: string,
        label: string,
        x: number,
        y: number,
    ) {
        this._id = id;
        this._label = label;
        this._position = new Point(x, y);
        this._radius = 10;
        this._edges = [];
    }

    public set selected(value: boolean) {
        this._selected = value;
    }

    public get selected(): boolean {
        return this._selected;
    }

    public get position(): Point {
        return this._position;
    }

    public get radius(): number {
        return this._radius;
    }

    // public get height(): number {
    //     return this._height;
    // }

    public get edges(): Edge[] {
        return this._edges;
    }

    render(context: CanvasRenderingContext2D): void {

        if (this._selected) {
            context.fillStyle = 'orange';
        } else {
            context.fillStyle = 'blue';
        }

        context.beginPath();
        context.arc(this._position.x, this._position.y, this._radius, 0, 2 * Math.PI);
        context.fill();    
        context.closePath();
    }
}