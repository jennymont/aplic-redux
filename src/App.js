import {useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter} from './redux/contador/action';
import './App.css';
import { useState } from 'react';


function App() {
  const [incremento, setIncremento] = useState(0)
  const [decremento, setDecremento] = useState(0)
  const {value} = useSelector(state => state.contador)
  const dispatch = useDispatch()
  
  function heandleIncremente(){
    console.log(value)
    dispatch(incrementCounter(incremento))
    
  }  

  function heandleDecrement(){
    dispatch(decrementCounter(decremento))
  }
  
  function pegaNumero(e) {
    let valor = 0;
    if (e.target.value !== undefined) {
      valor = parseInt(e.target.value);
    }
    return valor;
  }

  return (
    <div className="App">
      Valor: {value}
      <br />
      <input value={incremento} type="number" onChange={e => setIncremento(pegaNumero(e))} placeholder='incremento' ></input>
      <button onClick={heandleIncremente}>INCREMENT</button>
      <br />
      <input  value={decremento} type="number" onChange={e=> setDecremento(pegaNumero(e))} placeholder='decremento' ></input>
      <button onClick={heandleDecrement}>DECREMENT</button>
     
    </div>
  );
}

export default App;
