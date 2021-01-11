import React,{useEffect,useState} from 'react';
import Currencyinput from './currencyinput';
import "./styles/app.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExchangeAlt} from "@fortawesome/free-solid-svg-icons";

const URL=" https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyOpt,setCurrencyopt]=useState([]);
  const [fromCurrency,setFromcurrency]=useState([]);
  const [toCurrency,setTocurrency]=useState([]);
  const [exchangeRate,setExchangerate]=useState([]);
  const [amount,setAmount]=useState(1);
  const [isamountFromCurrency,setisamountFromCurrency]=useState(true);

  let fromAmount,toAmount;
  if(isamountFromCurrency){
     fromAmount=amount;
     toAmount=amount*exchangeRate;
  }else{
    toAmount=amount;
    fromAmount=amount/exchangeRate;
  }

  useEffect(() => {
  
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
      const firstCurrency= Object.keys(data.rates)[11];
      setCurrencyopt([data.base,...Object.keys(data.rates)])
      setFromcurrency(data.base);
      setTocurrency(firstCurrency);
      setExchangerate(data.rates[firstCurrency]);
    })

  }, [])

  useEffect(() => {
    
    if(fromCurrency!=null && toCurrency!=null)
    {
      fetch(`${URL}?base=${fromCurrency}&symbols=${toCurrency}`)
    .then(res=>res.json())
    .then(data=> setExchangerate(data.rates[toCurrency]))
    } 
  }, [fromCurrency,toCurrency])
  

  const handlerFromamountChange=(e)=>{
    setAmount(e.target.value);
    setisamountFromCurrency(true);
 }
 const handlerToamountChange=(e)=>{
    setAmount(e.target.value);
    setisamountFromCurrency(false);
 }
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <Currencyinput  currencyOpt={currencyOpt} selectedCurrency={fromCurrency} setCurrency={setFromcurrency} amount={fromAmount} onchangeAmount={ handlerFromamountChange}/>
      <i class="fa fa-exchange" aria-hidden="true"></i>
      <FontAwesomeIcon className="equals" size="2x" icon={faExchangeAlt} />
      <Currencyinput currencyOpt={currencyOpt} selectedCurrency={toCurrency} setCurrency={setTocurrency} amount={toAmount} onchangeAmount={ handlerToamountChange} />
    </div>
  );
}

export default App;
