// import Food from './modules/Food'
// import Score from './modules/Score'
// import Snake from './modules/Snake'

/********************************************************************************
*
<script type="module" defer src="./index.js"></script>
browser 現在還不支援 import export 寫法，需要在檔名後面加 js
*
*********************************************************************************/
import Food from './modules/Food.js'
import Score from './modules/Score.js'
import Snake from './modules/Snake.js'

/********************************************************************************
*
代碼 food , score測試
*
*********************************************************************************/
console.log('welcome to using typeScript')

const food = new Food()
food.change()
console.log('food position x:', food.X, ' y:', food.Y)

const score = new Score()
for (let index = 0; index < 15; index++) {
  score.addScore()
}

/********************************************************************************
*
測試 snake 代碼
*
*********************************************************************************/
const snake = new Snake()
snake.X = 5
snake.Y = 9
snake.sayPosition()

snake.addBody()
snake.addBody()
snake.addBody()
snake.addBody()
console.log('snake body length : ', snake.body.length)
