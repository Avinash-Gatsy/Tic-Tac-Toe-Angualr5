import { Component } from '@angular/core';
import { GameBoard } from './gameBoard';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tic Tac Toe';
  gameBoard = new GameBoard();
  game = new Game(this.gameBoard);

  boardDimension = Math.round(Math.sqrt(this.gameBoard.size));
  rows = Array.from(Array(this.boardDimension).keys());
  columns = Array.from(Array(this.boardDimension).keys());

  status = 'Player :';
  statusFinished = false;
  boardClicked(position: number): void {
    if (this.game.isStillRunning()) {
      this.game.makeMove(position);
      this.updateDisplayedStatus();
    }
  }

  updateDisplayedStatus(): void {
    if (this.game.isWon()) {
      this.updateStatusWon();
    } else if (this.game.isDraw()) {
      this.updateStatusDraw();
    } else {
      this.updateStatusTurn();
    }
  }

  newGame(): void {
    this.restartGameBoard();
    this.restartStatus();
  }

  private restartGameBoard(): void {
    this.clearBoard();
    this.clearGame();
  }

  private restartStatus(): void {
    this.statusFinished = false;
    this.status = 'Turn: Player ' + this.game.currentPlayer;
  }

  private clearBoard(): GameBoard {
    return this.gameBoard = new GameBoard;
  }

  private clearGame(): Game {
    return this.game = new Game(this.gameBoard);
  }

  private updateStatusWon(): void {
    this.status = 'Winner: Player ' + this.game.currentPlayer;
    this.statusGameIsOver();
  }

  private updateStatusDraw(): void {
    this.status = 'It is a draw!';
    this.statusGameIsOver();
  }

  private updateStatusTurn(): void {
    this.status = 'Turn: Player ' + this.game.currentPlayer;
  }

  private statusGameIsOver(): void {
    this.statusFinished = true;
  }
}
