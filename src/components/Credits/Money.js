import React from "react";

function Money({ total }) {
  return (
    <div className="credit-box credit-paid-box">
      <div className="credit-display-box">{total}</div>
      <span>Money</span>
    </div>
  );
}

export default Money;
