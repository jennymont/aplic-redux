import {useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter,stepChanged } from './redux/contador/action';
import './App.css';


function App() {
  
  const {value} = useSelector(state => state.contador)
  const dispatch = useDispatch()
  
  function heandleIncremente(){
    dispatch(incrementCounter())
    
  }  

  function heandleDecrement(){
    dispatch(decrementCounter())
  }

  function heandleStep(){
    dispatch(stepChanged)
  }

  return (
    <div className="App">
      Valor: {value}
      <br />
      <input onChange={heandleStep} value={value} type="number" ></input>
      <br />
      <button onClick={heandleIncremente}>INCREMENT</button>
      <button onClick={heandleDecrement}>DECREMENT</button>
     
    </div>
  );
}

export default App;
