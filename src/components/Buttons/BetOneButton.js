import React from "react";

function BetOneButton({ handleBetOne }) {
  return (
    <button className="btn bet-btn bet-one-btn" onClick={handleBetOne}>
      Bet <br /> one
    </button>
  );
}

export default BetOneButton;
