import React from "react";

function BetMaxButton({ handleBetMax }) {
  return (
    <button className="btn bet-btn bet-max-btn" onClick={handleBetMax}>
      Bet <br /> max
    </button>
  );
}

export default BetMaxButton;
