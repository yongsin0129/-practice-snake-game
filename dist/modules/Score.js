class Score {
    constructor(maxLevel = 100, scoreToLevelUp = 10) {
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.querySelector('#score');
        this.levelEle = document.querySelector('#level');
        this.maxLevel = maxLevel;
        this.scoreToLevelUp = scoreToLevelUp;
    }
    addScore() {
        this.scoreEle.innerHTML = (++this.score).toString();
        if (this.score % this.scoreToLevelUp === 0) {
            this.levelUp();
        }
    }
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = (++this.level).toString();
        }
    }
}
export default Score;
//# sourceMappingURL=Score.js.map