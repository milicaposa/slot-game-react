import React from "react";

function SpinButton({ handleSpin }) {
  return (
    <button className="btn spin-btn" onClick={handleSpin}>
      Spin
    </button>
  );
}

export default SpinButton;
