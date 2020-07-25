import React from "react";
import { observer } from "mobx-react";
import useStores from "../stores/useStores";

function useCounterData() {
  const { counter } = useStores();
  return {
    number: counter.number,
    increase: counter.increase,
    decrease: counter.decrease,
  };
}

const Counter = observer(() => {
  // Do not destructure data!
  const { number, increase, decrease } = useCounterData();
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
});

export default Counter;
