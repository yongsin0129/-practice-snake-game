class Food {
    constructor() {
        this.element = document.querySelector('#food');
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    change() {
        const top = (Math.floor(Math.random() * 30) * 10).toString();
        const left = (Math.floor(Math.random() * 30) * 10).toString();
        this.element.style.left = top + 'px';
        this.element.style.top = left + 'px';
    }
}
export default Food;
//# sourceMappingURL=Food.js.map