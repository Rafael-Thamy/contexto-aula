import { useContext, useState } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  //no onClick, caso eu coloque a funcao diretamente, quando o componente renderizar a função já sera
  //executada. Por isso o uso de arrow functions
  return (
    <>
      <div>
        <button onClick={() => setCounter(counter + 1)}>
          Add value to count
        </button>
      </div>
      <hr />
      <div>
        <button onClick={() => setCounter(counter - 1)}>
          take value to count
        </button>
      </div>
    </>
  );
};

export default ChangeCounter;
