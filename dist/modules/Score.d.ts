declare class Score {
    score: number;
    level: number;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    scoreToLevelUp: number;
    constructor(maxLevel?: number, scoreToLevelUp?: number);
    addScore(): void;
    levelUp(): void;
}
export default Score;
