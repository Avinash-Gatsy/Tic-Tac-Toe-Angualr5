import { GameBoard } from './gameBoard';

export class Game {
    gameBoard: GameBoard;
    constructor(gameBoard: GameBoard) {
        this.gameBoard = gameBoard;
    }
    players = ['X', 'O'];
    currentPlayer = this.players[0];

    makeMove(position: number) {
        if (this.gameBoard.isValid(position)) {
          this.gameBoard.placeMark(this.currentPlayer, position);
          this.toggleCurrentPlayer(this.gameBoard);
        }
      }
    isOver(): boolean {
        return (this.isWon() || this.isDraw());
      }
    isStillRunning(): boolean {
        return !this.isOver();
      }
    isDraw(): boolean {
        return ((!this.isWon()) && (this.gameBoard.isBoardFull()));
      }
    isWon(): boolean {
        return (this.checkRows() || this.checkColumns() || this.checkDiagonals());
      }
    private toggleCurrentPlayer(gameBoard: GameBoard) {
        if (this.isStillRunning()) {
          (this.gameBoard.remainingMoves() % 2 === 0) ?
            this.currentPlayer = this.players[1] :
            this.currentPlayer = this.players[0];
        }
      }
    private checkRows(): boolean {
        for (let i = 1; i <= 7; i = i + 3) {
          if (this.gameBoard.returnMark(i) !== undefined &&
            this.gameBoard.returnMark(i) === this.gameBoard.returnMark(i + 1) &&
            this.gameBoard.returnMark(i + 1) === this.gameBoard.returnMark(i + 2)) {
            return true;
          }
        }
        return false;
      }
    private checkColumns(): boolean {
        for (let i = 1; i <= 3; i++) {
          if (this.gameBoard.returnMark(i) !== undefined &&
            this.gameBoard.returnMark(i) === this.gameBoard.returnMark(i + 3) &&
            this.gameBoard.returnMark(i + 3) === this.gameBoard.returnMark(i + 6)) {
            return true;
          }
        }
        return false;
      }
    private checkDiagonals(): boolean {
        for (let i = 1, j = 4; i <= 3; i = i + 2, j = j - 2) {
          if (this.gameBoard.returnMark(i) !== undefined &&
            this.gameBoard.returnMark(i) === this.gameBoard.returnMark(i + j) &&
            this.gameBoard.returnMark(i + j) === this.gameBoard.returnMark(i + 2 * j)) {
            return true;
          }
        }
        return false;
      }

}
