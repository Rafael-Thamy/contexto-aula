/* import { useContext } from "react";
 */ import ChangeCounter from "../components/ChangeCounter";
/* import { CounterContext } from "../context/CounterContext";
 */
//refatorando com hook de contexto
import { useCounterContext } from "../hooks/useCounterContext";

//usando um contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

// Home component will be a consumer
//o useContext serve para setar um consumidor do Contexto em questão. Logo, Home
//será um consumidor

const Home = () => {
  /*   const { counter } = useContext(CounterContext);
   */

  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

  //alterando contexto mais complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>valor do contador: {counter}</p>

      {/* alterando o valor do contexto */}
      <ChangeCounter />

      {/* alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
