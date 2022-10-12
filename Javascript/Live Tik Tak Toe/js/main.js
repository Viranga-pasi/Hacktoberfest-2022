import Game from './Game.js';
import GameView from './GameView.js';

let game = new Game();
let gameView = new GameView();

let tiles = document.querySelectorAll('.board-tile');

tiles.forEach((tile) => {
	tile.addEventListener('click', () => {
		// console.log('tile clicked ' + tile.getAttribute('data-index'));
		onTileClicked(tile.dataset.index);
	});
});

function onTileClicked(i) {
	// console.log('tile clicked '+ i);
	game.makeMove(i);
	gameView.updateBoard(game);
}

document.querySelector('.restart').addEventListener('click', () => {
	onRestartClick();
});

function onRestartClick() {
	game = new Game();
	gameView.updateBoard(game);
}
gameView.updateBoard(game);
