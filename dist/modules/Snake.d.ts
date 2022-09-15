declare class Snake {
    element: HTMLElement;
    head: HTMLElement;
    body: NodeList;
    constructor();
    get X(): number;
    set X(value: number);
    get Y(): number;
    set Y(value: number);
    addBody(): void;
    sayPosition(): void;
}
export default Snake;
