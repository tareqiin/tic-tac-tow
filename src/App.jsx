import { useState } from 'react';
import Player from "./Components/player";
import GameBoard from "./Components/GameBoard";
import Log from './Components/Log';
import GameOver from './Components/GameOver';
import { WINNING_COMBINATIONS } from './Components/WINNING_COMBINATIONS';


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  let gameBoard = initialGameBoard.map(row => [...row]); 
  for (const turn of gameTurns) { 
    const { square, player } = turn; 
    const { row, col } = square; 
    gameBoard[row][col] = player; 
  }

  let winner = null; 
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]; 
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]; 
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]; 

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol; 
    }
  }

  function handleActivePlayer(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));

    setGameTurns(prevTurns => {
      let currentPlayer = prevTurns.length === 0 || prevTurns[0].player === 'O' ? 'X' : 'O';
      
      return [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
    });
  }
  function handleRematch() {
    setGameTurns([]);
    setActivePlayer('X');
  }
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {winner && <GameOver winner={winner} onRematch={handleRematch} />}
        
        <GameBoard onSelectSquare={handleActivePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App; 