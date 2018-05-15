import { GameBoard } from './gameBoard';

export class Setup {
    static setupBoard(...args: string[]): GameBoard {
        const gameBoard = new GameBoard();
        gameBoard.placeMark(args[0], 1);
        gameBoard.placeMark(args[1], 2);
        gameBoard.placeMark(args[2], 3);
        gameBoard.placeMark(args[3], 4);
        gameBoard.placeMark(args[4], 5);
        gameBoard.placeMark(args[5], 6);
        gameBoard.placeMark(args[6], 7);
        gameBoard.placeMark(args[7], 8);
        gameBoard.placeMark(args[8], 9);
        return gameBoard;
    }
}
