import { useState } from 'react'; 

export default function Player({ name, symbol, isActive }) {
  const [nameUpdate, setNameUpdate] = useState(name); 
  const [update, setUpdate] = useState(false);
  function handleChange(event){
    setNameUpdate(event.target.value); 
  }
  function editing() {
    setUpdate((editing) => !editing);
  }

  let playerName = <span className="player-name">{nameUpdate}</span>; 
  let buttonState = "Edit"; 
  if (update) {
    playerName = <input type='text' value={nameUpdate} required placeholder='Enter' onChange={handleChange} />;
    buttonState = "Save"; 
  }

  
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={editing}>{buttonState}</button>
      </span>
    </li>
  );
}
