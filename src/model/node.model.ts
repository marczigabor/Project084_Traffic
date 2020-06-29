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


        // let p1 = new Point(100, 40);
        // let p2 = new Point(190, 68);

        // var dx = p2.x - p1.x;
        // var dy = p2.y - p1.y;
        // var dist = Math.sqrt(dx*dx + dy*dy);
    
        // context.beginPath();

        // context.arc(p1.x, p1.y, 10, 0, 2 * Math.PI);
        // context.arc(p2.x, p2.y, 10, 0, 2 * Math.PI);
        // context.fill();   
        // context.closePath();
        // // if (dist <= Math.abs(r2 - r1)) {
        // //     // The circles are coinciding. There are no valid tangents.
        // //     return;
        // // }
    
        // // Rotation from the x-axis.
        // var angle1 = Math.atan2(dy, dx);
        // console.log(angle1);
    
        // // Relative angle of the normals. This is equal for both circles.
        // var angle2 = Math.acos((10 - 10)/dist);
        // console.log(angle2);
    

        // context.strokeStyle = 'blue';
        // context.lineWidth = 1;
        
        // context.beginPath();
        // context.moveTo(p1.x + 10 * Math.cos(angle1 + angle2), p1.y + 10 * Math.sin(angle1 + angle2));
        // context.lineTo(p2.x + 10 * Math.cos(angle1 + angle2), p2.y + 10 * Math.sin(angle1 + angle2));
        // context.stroke();                    
        // context.closePath();

        // context.beginPath();
        // context.moveTo(p1.x + 10 * Math.cos(angle1 - angle2), p1.y + 10 * Math.sin(angle1 - angle2));
        // context.lineTo(p2.x + 10 * Math.cos(angle1 - angle2), p2.y + 10 * Math.sin(angle1 - angle2));
        // context.stroke();                    
        // context.closePath();

    }    

}