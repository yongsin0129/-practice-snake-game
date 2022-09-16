/********************************************************************************
*
定義 Snake 類
*
*********************************************************************************/
class Snake {
  element: HTMLElement
  head: HTMLElement
  body: NodeList

  constructor () {
    this.element = document.querySelector('#snake') as HTMLElement
    this.head = this.element.querySelector('div') as HTMLElement
    this.body = document.querySelectorAll('#snake > div') as NodeList
  }

  get X (): number {
    return this.head.offsetLeft
  }

  set X (value: number) {
    if (value < 0 || value > 290) {
      throw new Error('Game Over')
    }
    this.head.style.left = value.toString() + 'px'
  }

  get Y (): number {
    return this.head.offsetTop
  }

  set Y (value: number) {
    if (value < 0 || value > 290) {
      throw new Error('Game Over')
    }
    this.head.style.top = value.toString() + 'px'
  }

  addBody (): void {
    this.head.insertAdjacentHTML('afterend', '<div></div>')
    this.body = document.querySelectorAll('#snake > div')
  }
}

export default Snake
