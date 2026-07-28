
import { useState } from "react";
import tapSound from './assets/tap.mp3';
import winnerSound from './assets/winner.mp3'
import gameOverSound from './assets/game over.mp3'

const audio = new Audio(tapSound);
const winSound = new Audio(winnerSound);
const gameOvSound = new Audio(gameOverSound);



export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Helper function to calculate winner
  const calculateWinner = (boardSquares) => {
    const lines = [
      [0, 1, 2], // futher it will works as index
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      // understand this logic if boards "a" th index contains some element(O?X)  and "a"th & "b"th element is same then winner
      if (
        boardSquares[a] &&
        boardSquares[a] === boardSquares[b] &&
        boardSquares[a] === boardSquares[c]
      ) {
        return boardSquares[a];
        winSound.play()
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  const handleClick = (index) => {

    // Return early if square is already filled or game is over
    if (squares[index] || winner) {
      return;
    }
    audio.play();
  

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? "X" : "O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
    winSound.play()
  } else if (isDraw) {
    status = "It's a draw!";
    gameOvSound.play()
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  return (
    <div className="game-container">
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      <button id="reset" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}
export default Board;