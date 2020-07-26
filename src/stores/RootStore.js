import CounterStore from "./CounterStore";
import MarketStore from "./MarketStore";
import GridStore from "./GridStore";

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
    this.grid = new GridStore(this);
  }
}

export default RootStore;
