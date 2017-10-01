class TicTacToe {
  constructor() {
    this.field = [];

    for (var i = 0; i < 3; i++) {
      this.field[i] = [];
      for (var y = 0; y < 3; y++) {
        this.field[i][y] = null;
      }
    }
    this.curplayer = 0;
    this.player = ['x', 'o'];
    this.winner = null;
  }

  getCurrentPlayerSymbol() {
    return this.player[this.curplayer % 2];
  }

  nextTurn(rowIndex, columnIndex) {
    if(this.field[rowIndex][columnIndex] == null) {
        this.field[rowIndex][columnIndex] = this.player[this.curplayer % 2];
        this.curplayer++;
    }
  }

  isFinished() {
    this.getWinner();
    return (this.winner != null || this.noMoreTurns());
  }

  getWinner() { 
    for (var i = 0; i < 3; i++) {
    if(this.field[i][0] == this.field[i][1] && this.field[i][0] == this.field[i][2] && this.field[i][2]  != null) {
        this.winner = this.field[i][1];
        break;
        }
        else if(this.field[0][i] == this.field[1][i] && this.field[0][i] == this.field[2][i] && this.field[2][i]  != null) {
        this.winner = this.field[1][i];
        break;
        }
    }
    if(this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2] && this.field[1][1] != null) this.winner = this.field[1][1];
    if(this.field[0][2] == this.field[1][1] && this.field[1][1] == this.field[2][0] && this.field[1][1]!= null) this.winner = this.field[1][1];
    return this.winner;
  }

  noMoreTurns() {
    for (var i = 0; i < 3; i++)
      for (var y = 0; y < 3; y++)
        if (this.field[i][y] == null) {
            return false;
        }

    return true;
  }

  isDraw() {
    this.getWinner();
    return !(!this.noMoreTurns() || this.winner != null);
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
 
}

module.exports = TicTacToe;
