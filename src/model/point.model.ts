export class Point {

    private _tolerance: number;

    constructor(public x: number, public y: number) {
        this._tolerance = 1;
    }

    public eq(point: Point) {
        return point && 
        (
            ((Math.round(this.x) + this._tolerance >= Math.round(point.x)) && (Math.round(this.x) - this._tolerance <= Math.round(point.x))) &&
            ((Math.round(this.y) + this._tolerance >= Math.round(point.y)) && (Math.round(this.y) - this._tolerance <= Math.round(point.y)))
        );
    }
}