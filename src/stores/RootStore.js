import CounterStore from "./CounterStore";
import MarketStore from "./MarketStore";

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
  }
}

export default RootStore;
