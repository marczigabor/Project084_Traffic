import { BaseComponent } from "./base.component";
import { Graph } from "../model/graph.model";

export class RenderComponent extends BaseComponent {
    
    private oldTimeStamp: number;
    private fps: number;

    destroy(): void {
    }

    public readonly canvas: HTMLCanvasElement;
    public readonly context: CanvasRenderingContext2D;

    constructor(containerDiv: HTMLDivElement) {
        super();

        this.canvas = document.createElement('canvas');
        this.canvas.width = containerDiv.clientWidth;
        this.canvas.height = containerDiv.clientHeight;
        containerDiv.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
    }

    public draw = (timeStamp: number, graph: Graph): void => {

        // Calculate the number of seconds passed since the last frame
        const secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;
    
        // Calculate fps
        this.fps = Math.round(1 / secondsPassed);
    
        this.drawGraph(graph);

    }

    private drawGraph = (graph: Graph): void => {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (graph) {

            // nodes
            this.context.strokeStyle = 'blue';
            this.context.lineWidth = 1;
            if (graph.nodes && Array.isArray(graph.nodes) ) {
                graph.nodes.forEach(node => {
                    if (node.selected) {
                        this.context.fillStyle = 'orange';
                        this.context.beginPath();
                        this.context.fillRect(node.x - (node.width / 2), node.y - (node.height/2), node.width, node.height);
                        this.context.closePath();
                    } else {
                        this.context.beginPath();
                        this.context.rect(node.x - (node.width / 2), node.y - (node.height/2), node.width, node.height);
                        this.context.stroke();                    
                        this.context.closePath();
                    }
                });
            }

            // edges
            if (graph.edges && Array.isArray(graph.edges) ) {
                graph.edges.forEach(edge => {

                    this.context.strokeStyle = 'blue';

                    this.context.beginPath();
                    this.context.moveTo(edge.startNode.x, edge.startNode.y);
                    this.context.lineTo(edge.endNode.x, edge.endNode.y);
                    this.context.lineWidth = 1;
                    this.context.stroke();                    
              
                    // set line color
                    this.context.closePath();
                    
                });
            }
            
        }

    }
}

