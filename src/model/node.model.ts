import { IRendering } from "../interfaces/irendering";
import { Point } from "./point.model";
import { Edge } from "./edge.model";

export class Node implements IRendering {

    private readonly _id: string;
    private readonly _label: string;
    private readonly _width: number;
    private readonly _height: number;
    private _selected: boolean;
    private _position: Point;
    private _edges: Edge[];

    constructor(    
        id: string,
        label: string,
        x: number,
        y: number,
    ) {
        this._id = id;
        this._label = label;
        this._position = new Point(x, y);
        this._width = 20;
        this._height = 20;
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

    public get width(): number {
        return this._width;
    }

    public get height(): number {
        return this._height;
    }

    public get edges(): Edge[] {
        return this._edges;
    }

    render(context: CanvasRenderingContext2D): void {

        if (this._selected) {
            context.fillStyle = 'orange';
            context.beginPath();
            context.fillRect(this._position.x - (this._width / 2), this._position.y - (this._height/2), this._width, this._height);
            context.closePath();
        } else {
            context.beginPath();
            context.rect(this._position.x - (this._width / 2), this._position.y - (this._height/2), this._width, this._height);
            context.stroke();                    
            context.closePath();
        }

    }
}