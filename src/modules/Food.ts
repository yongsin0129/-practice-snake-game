/********************************************************************************
*
定義 Food 類
*
*********************************************************************************/
class Food {
  element: HTMLElement

  constructor () {
    this.element = document.querySelector('#food') as HTMLElement
  }

  get X (): number {
    return this.element.offsetLeft
  }

  get Y (): number {
    return this.element.offsetTop
  }

  change (): void {
    const top: string = (Math.floor(Math.random() * 30) * 10).toString()
    const left: string = (Math.floor(Math.random() * 30) * 10).toString()

    this.element.style.left = top + 'px'
    this.element.style.top = left + 'px'
  }
}

export default Food
