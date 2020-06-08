import { BaseComponent } from "./base.component";
import { Graph } from "../model/graph.model";
import { Node } from "../model/node.model";
import { Edge } from "../model/edge.model";
import { Point } from "../model/point.model";

export class GraphComponent extends BaseComponent {

    public readonly graph: Graph;

    constructor() {
        super();
        this.graph = new Graph();
    }

    public handleClick = (x: number, y: number): void =>  {

        const node = this.graph.nodes.find((storedNode) => 
        storedNode.x - (storedNode.width/2) <= x && storedNode.x + (storedNode.width/2) >= x && 
        storedNode.y - (storedNode.height/2) <= y && storedNode.y + (storedNode.height/2) >= y);

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
        if (this.graph.nodes) {
            this.graph.nodes.push(new Node(this.graph.nodes.length.toString(), '', x, y));
        }
    }

    public addEdge = (startNode: Node, endNode: Node): void => {
        if (this.graph.edges) {
            if (!this.graph.edges.find((storedEdge) => storedEdge.startNode === startNode && storedEdge.endNode === endNode)) {
                this.graph.edges.push(new Edge(startNode, endNode));
            }  
        }
    }

    private getSelectedNodes(): Node[] {
        return this.graph.nodes.filter((node) => node.selected);         
    }

}