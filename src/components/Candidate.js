import React from 'react';
import Square from './Square';

function Candidate() {
  let candidates = [];

  for (let i = 0; i < 12; i++) {
    let line = [];
    for (let j = 0; j < 23; j++) {
      line.push(<Square value={""} />);
    }
    candidates.push(line);
  }

  const startPositions = [
    {x: 0, y: 3},
    {x: 0, y: 7},
  ];

  const blockShape = [
    [{x: 0, y: 0}],
    [[{x: 0, y: 0}], [{x: 0, y: 1}]],
  ];


  // candidates[startPositions[0].x][startPositions[0].y] = blockShape[0].x;
  // for (let k = 0; k < blockShape[0].length; k++) {
  //   candidates[startPositions[k].x] = blockShape[k][k].x;
  // }

  // console.log(candidates[startPositions[0].x][startPositions[0].y]);
  // candidates[startPositions[0].x][startPositions[0].y] = <Square value={null} className="kouho" />;

  // console.log(candidates[startPositions[1].x][startPositions[1].y]);
  // candidates[startPositions[1].x][startPositions[1].y] = <Square value={null} className="kouho" />;


  candidates[0][3] = <Square value={null} className="kouho" />; // 1

  candidates[0][7] = <Square value={null} className="kouho" />; // 2
  candidates[0][8] = <Square value={null} className="kouho" />;

  candidates[0][12] = <Square value={null} className="kouho" />; // 「の
  candidates[0][13] = <Square value={null} className="kouho" />;
  candidates[1][13] = <Square value={null} className="kouho" />;

  candidates[0][17] = <Square value={null} className="kouho" />; // 3の棒
  candidates[0][18] = <Square value={null} className="kouho" />;
  candidates[0][19] = <Square value={null} className="kouho" />;

  candidates[2][0] = <Square value={null} className="kouho" />; // 四角
  candidates[2][1] = <Square value={null} className="kouho" />;
  candidates[3][0] = <Square value={null} className="kouho" />;
  candidates[3][1] = <Square value={null} className="kouho" />;

  candidates[2][5] = <Square value={null} className="kouho" />; // 逆T（短い方）
  candidates[3][4] = <Square value={null} className="kouho" />;
  candidates[3][5] = <Square value={null} className="kouho" />;
  candidates[3][6] = <Square value={null} className="kouho" />;

  candidates[3][9] = <Square value={null} className="kouho" />; // 4個横長
  candidates[3][10] = <Square value={null} className="kouho" />;
  candidates[3][11] = <Square value={null} className="kouho" />;
  candidates[3][12] = <Square value={null} className="kouho" />;

  candidates[2][17] = <Square value={null} className="kouho" />; // Lの4個
  candidates[3][15] = <Square value={null} className="kouho" />;
  candidates[3][16] = <Square value={null} className="kouho" />;
  candidates[3][17] = <Square value={null} className="kouho" />;

  candidates[2][21] = <Square value={null} className="kouho" />; // 半分卍
  candidates[2][22] = <Square value={null} className="kouho" />;
  candidates[3][20] = <Square value={null} className="kouho" />;
  candidates[3][21] = <Square value={null} className="kouho" />;

  candidates[6][0] = <Square value={null} className="kouho" />; // ミニL
  candidates[7][0] = <Square value={null} className="kouho" />;
  candidates[7][1] = <Square value={null} className="kouho" />;
  candidates[7][2] = <Square value={null} className="kouho" />;
  candidates[7][3] = <Square value={null} className="kouho" />;

  candidates[5][6] = <Square value={null} className="kouho" />; // T
  candidates[6][6] = <Square value={null} className="kouho" />;
  candidates[7][5] = <Square value={null} className="kouho" />;
  candidates[7][6] = <Square value={null} className="kouho" />;
  candidates[7][7] = <Square value={null} className="kouho" />;

  candidates[5][9] = <Square value={null} className="kouho" />; // L字
  candidates[6][9] = <Square value={null} className="kouho" />;
  candidates[7][9] = <Square value={null} className="kouho" />;
  candidates[7][10] = <Square value={null} className="kouho" />;
  candidates[7][11] = <Square value={null} className="kouho" />;



  let elm = (
    <div className="board-row">

      <ul>
        {candidates.map((val) =>
          <li>{val}</li>
        )}
      </ul>

    </div>

  );


  return (
    <div>
      {elm}
    </div>
  );
}

export default Candidate;