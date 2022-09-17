import Food from './Food'
import Score from './Score'
import Snake from './Snake'

class GameControl {
  food: Food
  score: Score
  snake: Snake
  direction = 'ArrowRight'
  snakeRunTimer: any

  constructor () {
    this.food = new Food()
    this.score = new Score()
    this.snake = new Snake()
    this.snakeRunTimer = {}
    this.init()
  }

  handleKeyDown (evert: KeyboardEvent): void {
    switch (evert.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        this.direction = evert.key
        break
    }
  }

  checkGetFood (X: number, Y: number): void {
    if (this.food.X === X && this.food.Y === Y) {
      this.food.change()
      this.score.addScore()
      this.snake.addBody()
    }
  }

  run (): void {
    try {
      // 蛇頭移動
      switch (this.direction) {
        case 'ArrowUp':
          this.snake.Y -= 10
          break
        case 'ArrowDown':
          this.snake.Y += 10
          break
        case 'ArrowLeft':
          this.snake.X -= 10
          break
        case 'ArrowRight':
          this.snake.X += 10
          break
      }
      clearTimeout(this.snakeRunTimer)
      this.snakeRunTimer = setTimeout(
        this.run.bind(this),
        200 - (this.score.level - 1) * 20
      )
    } catch (e) {
      window.alert((e as any).message)
      window.clearInterval(this.snakeRunTimer)
    }

    this.checkGetFood(this.snake.X, this.snake.Y)
  }

  init (): void {
    // 將現在這個 this (gameControl) 綁到 handleKeyDown fn 裡面
    addEventListener('keydown', this.handleKeyDown.bind(this))
    this.snakeRunTimer = setTimeout(this.run.bind(this), 200)
  }
}

export default GameControl
