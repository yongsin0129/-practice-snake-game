/********************************************************************************
*
定義 Score 類
*
*********************************************************************************/
class Score {
  score = 0
  level = 1
  scoreEle: HTMLElement
  levelEle: HTMLElement
  maxLevel: number
  scoreToLevelUp: number

  constructor (maxLevel = 100, scoreToLevelUp = 5) {
    this.scoreEle = document.querySelector('#score') as HTMLElement
    this.levelEle = document.querySelector('#level') as HTMLElement
    this.maxLevel = maxLevel
    this.scoreToLevelUp = scoreToLevelUp
  }

  addScore (): void {
    this.scoreEle.innerHTML = (++this.score).toString()
    if (this.score % this.scoreToLevelUp === 0) {
      this.levelUp()
    }
  }

  levelUp (): void {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = (++this.level).toString()
    }
  }
}

export default Score
