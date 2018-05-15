export class GameBoard {
    size = 9;
    private grid: Array<any>;
    constructor() {
        this.grid = new Array<any>(this.size);
      }
    isBoardEmpty(): boolean {
        return (this.remainingMoves() === this.size) ? true : false;
      }
    isBoardFull(): boolean {
        return (this.remainingMoves() === 0) ? true : false;
      }
    isValid(position: number): boolean {
        return (this.isValidRange(position) && this.isPositionEmpty(position));
      }
    placeMark(mark: string, position: number) {
        if (this.isValid(position)) {
          this.grid[position - 1] = mark;
        }
      }
    returnMark(position: number) {
        return this.grid[position - 1];
      }
    remainingMoves() {
        let remaining = 0;
        for (let i = 0; i < 9; i++) {
          if (this.grid[i] === undefined) {
              remaining++;
            }
        }
        return remaining;
      }
    private isValidRange(position: number): boolean {
        return (position >= 1 && position <= 9);
      }
    private isPositionEmpty(position: number): boolean {
        return (this.grid[position - 1] === undefined);
      }
}
