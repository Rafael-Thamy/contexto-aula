import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  //validação do contexto. Se nao houver contexto

  if (!context) {
    console.log("contexto nao encontrado");
  }
  return context;
};
