import Bet from "./Bet";
import Money from "./Money";

function Credits ({ credits }) {
    return <section className="credits-section">
    <Bet bet={credits.bet} />
    <Money total={credits.total} />
  </section>
}

export default Credits;