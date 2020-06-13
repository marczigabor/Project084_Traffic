import { BaseComponent } from "../base.component";
import { IRendering } from "../../interfaces/irendering";


export abstract class VisualisationBaseComponent extends BaseComponent implements IRendering {

    abstract render(context: CanvasRenderingContext2D, fps: number): void;

    abstract handleClick(x: number, y: number): void;

}