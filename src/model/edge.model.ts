import { Node } from "./node.model";

export class Edge {

    constructor(
        // public readonly id: string,
        public startNode: Node,
        public endNode: Node
    ) {

    }
}