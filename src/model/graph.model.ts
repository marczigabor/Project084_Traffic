import { Node } from './node.model';
import { Edge } from './edge.model';
import { IRendering } from '../interfaces/irendering';

export class Graph implements IRendering {

    private _nodes: Node[];
    private _edges: Edge[];

    private _visible: boolean;

    constructor() {
        this._edges = [];
        this._nodes = [];
        this._visible = true;
    }
    
    public get edges(): Edge[] {
        return this._edges;
    }
    
    public get nodes(): Node[] {
        return this._nodes;
    }

    public setVisibility(): void {
        this._visible = !this._visible;
    }

    public render(context: CanvasRenderingContext2D): void {
    
        // nodes
        if (!this._visible) {
            return;
        }

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