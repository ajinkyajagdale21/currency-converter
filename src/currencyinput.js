import React from 'react';

function Currencyinput({currencyOpt}){
   return(
    <div>
      
      <input className="input" type="number"></input>
     
      <select className="select">
        {currencyOpt.map( option=> (
         <option key={option} value={option}>{option}</option>
        ))}
     </select>  
    </div>
   )
}

export default Currencyinput;