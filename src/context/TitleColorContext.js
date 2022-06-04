import { createContext, useReducer } from "react";

//criação do contexto
export const TitleColorContext = createContext();

//toda mudança de contexto temos uma action com seu tipo
export const titleColorReducer = (state, action) => {
  //switch
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
    default:
      return state;
  }
};

//criação do provider
export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  console.log(state);
  return (
    /* envolver os componentes filhos que estarão usando o contexto */
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
