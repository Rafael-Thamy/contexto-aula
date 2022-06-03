//criar contexto
import { createContext, useState } from "react";

export const CounterContext = createContext();

/* O provider vai delimitar onde o contexto é usado. Provider deve encapsular os demais com-
ponentes em que precisamos consultar ou alterar o valor. Assim poderemos compartilhar o valor do 
contexto com os demais componentes */

//criação do provider
//o children serve para encapsular elementos e continuar exibindo o conteudo deles dentro de outros elementos
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);
  return (
      <CounterContext.Provider value={{counter, setCounter}}>
          {children}
      </CounterContext.Provider>
      
  )
};

