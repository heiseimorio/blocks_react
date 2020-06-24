import React from 'react';

function Square(props) {
  return (
    <button
      className={"square" + (props.value === null ? " kouho" : "")}
      // onClick={() => this.setState({value: 'X'})}
    >
      {props.value}
    </button>
  );

}

export default Square;