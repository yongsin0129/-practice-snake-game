import Food from './modules/Food'
import Score from './modules/Score'
import Snake from './modules/Snake'
import GameControl from './modules/GameControl'

/********************************************************************************
*
<script type="module" defer src="./index.js"></script>
browser 現在還不支援 import export 寫法，需要在檔名後面加 js
*
*********************************************************************************/
// import Food from './modules/Food.js'
// import Score from './modules/Score.js'
// import Snake from './modules/Snake.js'

/********************************************************************************
*
      主程式開始
*
*********************************************************************************/
console.log('welcome to using typeScript')

const gameControl = new GameControl()
