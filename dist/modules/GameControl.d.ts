import Food from './Food';
import Score from './Score';
import Snake from './Snake';
declare class GameControl {
    food: Food;
    score: Score;
    snake: Snake;
    direction: string;
    isLive: boolean;
    snakeRunTimer: any;
    constructor();
    init(): void;
    handleKeyDown(evert: KeyboardEvent): void;
    run(): void;
    checkGetFood(X: number, Y: number): void;
}
export default GameControl;
