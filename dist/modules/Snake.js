class Snake {
    constructor() {
        this.element = document.querySelector('#snake');
        this.head = this.element.querySelector('div');
        this.body = document.querySelectorAll('#snake > div');
    }
    get X() {
        return this.head.offsetLeft;
    }
    set X(value) {
        this.head.style.left = (value * 10).toString() + 'px';
    }
    get Y() {
        return this.head.offsetTop;
    }
    set Y(value) {
        this.head.style.top = (value * 10).toString() + 'px';
    }
    addBody() {
        this.head.insertAdjacentHTML('afterend', '<div></div>');
        this.body = document.querySelectorAll('#snake > div');
    }
    sayPosition() {
        console.log('snake position x : ', this.X, ' y : ', this.Y);
    }
}
export default Snake;
//# sourceMappingURL=Snake.js.map