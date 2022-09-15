import Food from './Food';
import Score from './Score';
import Snake from './Snake';
class GameControl {
    constructor() {
        this.direction = 'ArrowRight';
        this.isLive = true;
        this.food = new Food();
        this.score = new Score();
        this.snake = new Snake();
        this.snakeRunTimer = {};
        this.init();
    }
    init() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        this.snakeRunTimer = setTimeout(this.run.bind(this), 200);
    }
    handleKeyDown(evert) {
        console.log(evert.key);
        switch (evert.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                this.direction = evert.key;
                break;
        }
    }
    run() {
        try {
            switch (this.direction) {
                case 'ArrowUp':
                    this.snake.Y -= 10;
                    break;
                case 'ArrowDown':
                    this.snake.Y += 10;
                    break;
                case 'ArrowLeft':
                    this.snake.X -= 10;
                    break;
                case 'ArrowRight':
                    this.snake.X += 10;
                    break;
            }
            clearTimeout(this.snakeRunTimer);
            this.snakeRunTimer = setTimeout(this.run.bind(this), 200 - (this.score.level - 1) * 70);
        }
        catch (e) {
            window.alert(e.message);
            this.isLive = false;
            window.clearInterval(this.snakeRunTimer);
        }
        this.checkGetFood(this.snake.X, this.snake.Y);
    }
    checkGetFood(X, Y) {
        if (this.food.X === X && this.food.Y === Y) {
            this.food.change();
            this.score.addScore();
        }
    }
}
export default GameControl;
//# sourceMappingURL=GameControl.js.map