import { Point } from "../model/point.model";

export class CalculationService {

    public static getDistance(x: Point, y: Point): number {

        if (x && y) {
            return Math.sqrt(Math.pow(x.x - y.x, 2) + Math.pow(x.y - y.y, 2));
        } else {
            return null;
        }
    }

}