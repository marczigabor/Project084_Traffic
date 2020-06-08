
export class Node {

    public width: number;
    public height: number;
    public selected: boolean;

    constructor(    
        public readonly id: string,
        public readonly label: string,
        public readonly x: number,
        public readonly y: number
    ) {
        this.width = 20;
        this.height = 20;
    }
}