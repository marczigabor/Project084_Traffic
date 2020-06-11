import { Node } from './node.model';
import { Edge } from './edge.model';
import { IRendering } from '../interfaces/irendering';

export class Graph implements IRendering {

    private _nodes: Node[];
    private _edges: Edge[];

    constructor() {
        this._edges = [];
        this._nodes = [];
    }
    
    public get edges(): Edge[] {
        return this._edges;
    }
    
    public get nodes(): Node[] {
        return this._nodes;
    }

    render(context: CanvasRenderingContext2D): void {
    
        // nodes
        context.strokeStyle = 'blue';
        context.lineWidth = 1;
        if (this.nodes && Array.isArray(this.nodes) ) {
            this.nodes.forEach(node => {
                node.render(context);
            });
        }

        // edges
        if (this.edges && Array.isArray(this.edges) ) {
            this.edges.forEach(edge => {
                edge.render(context);
            });
        }
    }
}