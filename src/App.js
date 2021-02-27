import React, { useState } from "react";
import "./App.scss";
// Components
import { getRandomInt } from "./components/helper";
import Status from "./components/Status";
import Reels from "./components/Reels";
import Credits from "./components/Credits";
import BetOneButton from "./components/Buttons/BetOneButton";
import BetMaxButton from "./components/Buttons/BetMaxButton";
import SpinButton from "./components/Buttons/SpinButton";

function App() {
  // State
  const [status, setStatus] = useState("Good luck!");
  const [credits, setCredits] = useState({
    bet: 1,
    total: 500,
  });
  const [loading, setLoading] = useState(false);
  const [symbols, setSymbols] = useState([3, 8, 2]);

  // Handle Spin
  const handleSpin = () => {
    setLoading(true);
    setSymbols([getRandomInt(1, 12), getRandomInt(1, 12), getRandomInt(1, 12)]);
  };

  // Handle Credit Change
  const handleCreditChange = (value) => {
    setCredits({ ...credits, ...value });
  };

  return (
    <div>
      <main>
        {/* Status Section */}
        <Status status={status} />

        {/* Reel Section */}
        <Reels
          setLoading={setLoading}
          loading={loading}
          credits={credits}
          setCredits={setCredits}
          setStatus={setStatus}
          symbols={symbols}
        />

        {/* Credits Section */}
        <Credits credits={credits} />

        {/* Button Section */}
        <section className="button-section">
          <BetOneButton handleBetOne={() => handleCreditChange({ bet: 1 })} />
          <BetMaxButton handleBetMax={() => handleCreditChange({ bet: 50 })} />
          <SpinButton handleSpin={handleSpin} />
        </section>
      </main>
    </div>
  );
}

export default App;
