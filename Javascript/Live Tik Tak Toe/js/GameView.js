export default class GameView {
	constructor() {
		// console.log('init game view');
	}

	updateBoard(game) {
		this.updateTurn(game);
		const winningCombinations = game.findWinningCombinations();
		// console.log('Game board with in game view');
		// console.log(winningCombinations);
		for (let i = 0; i < game.board.length; i++) {
			const tile = document.querySelector(`.board-tile[data-index = '${i}']`);
			// tile.textContent = game.board[i];
			tile.classList.remove('tile-winner');

			let tileType = game.board[i] == 'X' ? 'tile-x' : 'tile-o';

			tile.innerHTML = `<span class=${tileType}>${
				game.board[i] ? game.board[i] : ''
			}</span>`;

			if (winningCombinations && winningCombinations.includes[i]) {
				tile.classList.add('tile-winner');
			}
		}
	}

	updateTurn(game) {
		let playerX = document.querySelector('.player-x');
		let playerO = document.querySelector('.player-o');
		playerO.classList.remove('active');
		playerX.classList.remove('active');

		if (game.turn == 'X') {
			playerX.classList.add('active');
		} else {
			playerO.classList.add('active');
		}
	}
}
