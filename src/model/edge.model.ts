import { Node } from "./node.model";
import { IRendering } from "../interfaces/irendering";

export class Edge implements IRendering {

    private _startNode: Node;
    private _endNode: Node;

    constructor(
        // public readonly id: string,
        startNode: Node,
        endNode: Node
    ) {
        this._startNode = startNode;
        this._endNode = endNode;
    }

    public get startNode(): Node{
        return this._startNode;
    }

    public get endNode(): Node{
        return this._endNode;
    }

    public getEndNode(startNode: Node): Node {
        
        if (this._endNode === startNode) {
            return this.startNode;
        } else if (this._startNode === startNode) {
            return this.endNode;
        } else {
            return null;
        }
    }

    public render(context: CanvasRenderingContext2D): void {

        context.strokeStyle = 'blue';

        // context.beginPath();
        // context.moveTo(this.startNode.position.x, this.startNode.position.y);
        // context.lineTo(this.endNode.position.x, this.endNode.position.y);
        // context.lineWidth = 1;
        // context.stroke();                    
        // context.closePath();

        var dx = this.endNode.position.x - this.startNode.position.x;
        var dy = this.endNode.position.y - this.startNode.position.y;
        var dist = Math.sqrt(dx*dx + dy*dy);
    
        // if (dist <= Math.abs(r2 - r1)) {
        //     // The circles are coinciding. There are no valid tangents.
        //     return;
        // }
    
        // Rotation from the x-axis.
        var angle1 = Math.atan2(dy, dx);
    
        // Relative angle of the normals. This is equal for both circles.
        var angle2 = Math.acos((this.startNode.radius - this.endNode.radius)/dist);

        context.strokeStyle = 'blue';
        context.lineWidth = 1;
        
        context.beginPath();
        context.moveTo(this.startNode.position.x + this.startNode.radius * Math.cos(angle1 + angle2), this.startNode.position.y + this.startNode.radius * Math.sin(angle1 + angle2));
        context.lineTo(this.endNode.position.x + this.endNode.radius * Math.cos(angle1 + angle2), this.endNode.position.y + this.endNode.radius * Math.sin(angle1 + angle2));
        context.stroke();                    
        context.closePath();

        context.beginPath();
        context.moveTo(this.startNode.position.x + this.startNode.radius * Math.cos(angle1 - angle2), this.startNode.position.y + this.startNode.radius * Math.sin(angle1 - angle2));
        context.lineTo(this.endNode.position.x + this.endNode.radius * Math.cos(angle1 - angle2), this.endNode.position.y + this.endNode.radius * Math.sin(angle1 - angle2));
        context.stroke();                    
        context.closePath();        

    }
}