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
    this.head.style.left = (value * 10).toString() + 'px'
  }

  get Y (): number {
    return this.head.offsetTop
  }

  set Y (value: number) {
    this.head.style.top = (value * 10).toString() + 'px'
  }

  addBody (): void {
    this.head.insertAdjacentHTML('afterend', '<div></div>')
    this.body = document.querySelectorAll('#snake > div')
  }

  sayPosition (): void {
    console.log('snake position x : ', this.X, ' y : ', this.Y)
  }
}

export default Snake
