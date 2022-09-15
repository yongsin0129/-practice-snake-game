import Food from './modules/Food.js';
import Score from './modules/Score.js';
import Snake from './modules/Snake.js';
console.log('welcome to using typeScript');
const food = new Food();
food.change();
console.log('food position x:', food.X, ' y:', food.Y);
const score = new Score();
for (let index = 0; index < 15; index++) {
    score.addScore();
}
const snake = new Snake();
snake.X = 5;
snake.Y = 9;
snake.sayPosition();
snake.addBody();
snake.addBody();
snake.addBody();
snake.addBody();
console.log('snake body length : ', snake.body.length);
//# sourceMappingURL=index.js.map