import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [mainCurrencies, setMainCurrencies] = useState(["HKD", "USD", "AUD", "GBP", "CAD"]);
  const [rates, setRates] = useState([]);
  

  function doFetch() {
    const url = "https://api.exchangeratesapi.io/latest";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("the data", data);
            console.log(data.rates);
            setRates(Object.entries(data.rates));
            setMainCurrencies(mainCurrencies);
        });
  }

  function addCurrency(event){
    const currency = event.target.textContent;
    setMainCurrencies([...mainCurrencies, currency])

  }
 

  useEffect(doFetch, []);

  return (
    <div>
      <div className='TopNav'>
      <h1>Currency Rates Today</h1>
      <h5>Please click on bar to find out current rate for Euro Base Currency</h5>
      <div className='currencyNav'>
      {
        rates
        .map(rate =>(
            <button className='countrySelection' onClick={addCurrency}>
            {rate[0]}
            </button>
        ))
        }
      </div>
      </div>
      
      
      <div className="BarContainer">
      {
        rates
        .filter(rate => mainCurrencies.includes(rate[0]))
        .map(rate =>(
            <div className='Bar' style={{height: (1/rate[1] * 100) + '%'}}>
            {rate[0]}
            </div>
        ))
        }
      </div>
   </div>
   );
}


export default App;
