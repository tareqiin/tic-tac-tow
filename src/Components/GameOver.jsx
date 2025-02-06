export default function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner === "Draw" ? "It's a Draw!" : `${winner} Won!`}</p>
      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
}
