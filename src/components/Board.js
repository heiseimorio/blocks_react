import React from 'react';
import Square from './Square';

function Board() {

  let lines = [];

  for (let i = 0; i < 20; i++) {
    let line = [];
    for (let j = 0; j < 20; j++) {
      line.push(<Square value={""} />);
    }
    lines.push(line);
  }

  let elm = (
    <div className="board-row">

      <ul>
        {lines.map((val) =>
          <li>{val}</li>
        )}
      </ul>

    </div>

  );

  return (
    <div className="board">
      {elm}
    </div>
  );
}

export default Board;