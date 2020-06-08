import { Node } from './node.model';
import { Edge } from './edge.model';

export class Graph {

    public nodes: Node[];
    public edges: Edge[];

    constructor() {
        this.edges = [];
        this.nodes = [];
    }


}