/********************************************************************************
*
定義 Snake 類
*
*********************************************************************************/
class Snake {
  element: HTMLElement
  head: HTMLElement
  body: NodeList
  nextStepX: null | number
  nextStepY: null | number

  constructor () {
    this.element = document.querySelector('#snake') as HTMLElement
    this.head = this.element.querySelector('div') as HTMLElement
    this.body = document.querySelectorAll('#snake > div') as NodeList
    this.nextStepX = null
    this.nextStepY = null
  }

  get X (): number {
    return this.head.offsetLeft
  }

  set X (value: number) {
    if (value < 0 || value > 290) {
      throw new Error('撞到牆壁 Game Over')
    }
    // 理想上是蛇移動反方向時，不要觸發，目前寫法是直接 game over
    if (value === (this.body[1] as HTMLElement)?.offsetLeft) {
      throw new Error('撞到自己 (反方向) Game Over')
    }
    // 定義蛇的下一步
    this.nextStepX = value
    // 蛇移動身體
    this.moveBody()
    // 蛇移動頭
    this.head.style.left = value.toString() + 'px'
  }

  get Y (): number {
    return this.head.offsetTop
  }

  set Y (value: number) {
    if (value < 0 || value > 290) {
      throw new Error('Game Over')
    }
    // 理想上是蛇移動反方向時，不要觸發，目前寫法是直接 game over
    if (value === (this.body[1] as HTMLElement)?.offsetTop) {
      throw new Error('撞到自己 (反方向) Game Over')
    }
    this.nextStepY = value
    this.moveBody()
    this.head.style.top = value.toString() + 'px'
  }

  addBody (): void {
    // 一開始的style先設定到畫面外，因為產生的方塊一開始跟身體是分離的，等調用 moveBody()之間有時間差
    this.head.insertAdjacentHTML(
      'afterend',
      '<div style="left: -200px; top: -200px;"></div>'
    )
    // 重新定義蛇的身體
    this.body = document.querySelectorAll('#snake > div')
  }

  moveBody (): void {
    // 這邊必需倒序給給定座標，如果是順向，前一個的座標就會被洗掉
    for (let i = this.body.length; i > 0; i--) {
      // 獲取前一個方塊的座標
      const X = (this.body[i - 1] as HTMLElement).offsetLeft
      const Y = (this.body[i - 1] as HTMLElement).offsetTop

      // 檢查蛇的下一步有沒有跟身體重曡
      if (this.nextStepX === X && this.nextStepY === Y) {
        throw new Error('撞到自己 Game Over')
      }

      // 將當前方塊的座標改為前一個方塊的座標，且排除掉最後一個方塊(蛇的尾巴)
      const body = this.body[i] as HTMLElement
      if (this.body[i] !== undefined) {
        body.style.left = X.toString() + 'px'
        body.style.top = Y.toString() + 'px'
      }
    }
  }
}

export default Snake
