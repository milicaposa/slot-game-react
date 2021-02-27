import React from "react";

function Bet({ bet }) {
  return (
    <div className="credit-box credit-bet-box">
      <div className="credit-display-box">{bet}</div>
      <span>Bet</span>
    </div>
  );
}

export default Bet;
