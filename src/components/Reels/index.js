import Reel from "./Reel";
import React, { useEffect } from "react";

// Sounds
const winSound = new Audio(
  "https://milicaposa.github.io/slot-game-js/sounds/win-sound.wav"
);

const loseSound = new Audio(
  "https://milicaposa.github.io/slot-game-js/sounds/lose-sound.wav"
);

// Calculate Result
function calculateFinalResult(results) {
  if (new Set(results).size < results.length) {
    return { message: "Congratulations!", won: true }; // at least 2 are same
  } else {
    return { message: "Better luck next time..", won: false }; // all difference
  }
}

function Reels({
  symbols,
  loading,
  setLoading,
  credits,
  setCredits,
  setStatus,
}) {
  useEffect(() => {
    if (loading) {
      const result = calculateFinalResult(symbols);
      setStatus(result.message);
      if (result.won) {
        setCredits({ ...credits, total: credits.total + credits.bet * 2 });
        winSound.play();
      } else {
        setCredits({ ...credits, total: credits.total - credits.bet });
        loseSound.play();
      }
      setLoading(false);
    }
  }, [credits, loading, setCredits, setLoading, setStatus, symbols]);

  return (
    <section className="reel-section">
      {symbols.map((symbol, index) => {
        return <Reel symbol={symbol} key={index} />;
      })}
    </section>
  );
}

export default Reels;
