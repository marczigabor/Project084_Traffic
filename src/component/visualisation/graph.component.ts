import { BaseComponent } from "../base.component";
import { Graph } from "../../model/graph.model";
import { Node } from "../../model/node.model";
import { Edge } from "../../model/edge.model";
import { IRendering } from "../../interfaces/irendering";
import { VisualisationBaseComponent } from "./visualisation-base.component";

export class GraphComponent extends VisualisationBaseComponent {

    private readonly _graph: Graph;

    constructor() {
        super();
        this._graph = new Graph();
    }

    public get graph(): Graph {
        return this._graph;
    }

    public handleClick = (x: number, y: number): void =>  {

        const node = this._graph.nodes.find((storedNode) => 
        storedNode.position.x - (storedNode.width/2) <= x && storedNode.position.x + (storedNode.width/2) >= x && 
        storedNode.position.y - (storedNode.height/2) <= y && storedNode.position.y + (storedNode.height/2) >= y);

        if (node) {
            node.selected = !node.selected;

            const selectedNodes = this.getSelectedNodes();

            if (selectedNodes.length === 2) {

                let node1: Node = selectedNodes[0];
                let node2: Node = selectedNodes[1];
                node1.selected = false;
                node2.selected = false;

                this.addEdge(node1, node2);
            }

        } else {
            this.addNode(x, y);
        }
    } 

    public addNode = (x: number, y: number): void => {
        if (this._graph.nodes) {
            this._graph.nodes.push(new Node(this._graph.nodes.length.toString(), '', x, y));
        }
    }

    public addEdge = (startNode: Node, endNode: Node): void => {
        if (this._graph.edges) {
            if (!this._graph.edges.find((storedEdge) => storedEdge.startNode === startNode && storedEdge.endNode === endNode)) {
                this._graph.edges.push(new Edge(startNode, endNode));
            }  
        }
    }

    public render(context: CanvasRenderingContext2D): void {
        this._graph.render(context);
    }

    private getSelectedNodes(): Node[] {
        return this._graph.nodes.filter((node) => node.selected);         
    }

}