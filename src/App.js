import React,{useEffect,useState} from 'react';
import Currencyinput from './currencyinput';
import "./styles/app.scss";

const URL=" https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyOpt,setCurrencyopt]=useState([]);
  
  useEffect(() => {
  
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
      setCurrencyopt([data.base,...Object.keys(data.rates)])
    })

  }, [])
  return (
    <div className="App">
      <h1>Convert</h1>
      <Currencyinput currencyOpt={currencyOpt}/>
      <div className="equals">=</div>
      <Currencyinput currencyOpt={currencyOpt}/>
    </div>
  );
}

export default App;
