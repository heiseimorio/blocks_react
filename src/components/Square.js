import React from 'react';

function Square(props) {
  return (
    <button
      className="square"
      // onClick={() => this.setState({value: 'X'})}
    >
      {props.value}
    </button>
  );

}

export default Square;