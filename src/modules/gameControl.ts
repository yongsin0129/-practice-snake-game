import Food from './Food'
import Score from './Score'
import Snake from './Snake'

class GameControl {
  food: Food
  score: Score
  snake: Snake
  direction: string

  constructor () {
    this.food = new Food()
    this.score = new Score()
    this.snake = new Snake()
    this.init()
    this.direction = ''
  }

  init (): void {
    // 將現在這個 this (gameControl) 綁到 handleKeyDown fn 裡面
    addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  handleKeyDown (evert: KeyboardEvent): void {
    console.log(evert.key)
    this.direction = evert.key
  }
}

export default GameControl
