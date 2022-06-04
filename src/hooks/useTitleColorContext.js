import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);

  if (!context) {
    console.log("contexto nao encontrado");
  }

  return context;
};
