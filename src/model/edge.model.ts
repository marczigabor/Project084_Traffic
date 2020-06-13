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

        context.beginPath();
        context.moveTo(this.startNode.position.x, this.startNode.position.y);
        context.lineTo(this.endNode.position.x, this.endNode.position.y);
        context.lineWidth = 1;
        context.stroke();                    
  
        // set line color
        context.closePath();

    }
}