import React from 'react';

function Currencyinput({currencyOpt,selectedCurrency,setCurrency,amount,onchangeAmount}){

   const onchangeCurrencyHandler=(e)=>{
    setCurrency(e.target.value);   
   }

  
 
   return(
    <div>
      
      <input className="input" type="number" value={amount} onChange={onchangeAmount}></input>
     
      <select className="select" value={selectedCurrency} onChange={onchangeCurrencyHandler} >
        {currencyOpt.map( option=> (
         <option key={option} value={option}>{option}</option>
        ))}
     </select>  
    </div>
   )
}

export default Currencyinput;