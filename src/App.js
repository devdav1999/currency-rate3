import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [mainCurrencies, setMainCurrencies] = useState(["HKD", "USD", "AUD", "GBP", "CAD"]);
  const [countries, setCountries] = useState('');
  const [numbers, setNumbers] = useState('');
  const [rates, setRates] = useState([]);
  

  function doFetch() {
    const url = "https://api.exchangeratesapi.io/latest";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("the data", data);
            console.log(data.rates);
            // this.setState({
            //   countries: Object.keys(currencyData),
            //   numbers: Object.values(currencyData),
            // });
            setRates(Object.entries(data.rates));
            setMainCurrencies(mainCurrencies);
            // setCountries(Object.keys(currencyData));
            // setNumbers(Object.values(currencyData));
        });
  }


  useEffect(doFetch, []);

  return (
    <div>
      <div className='TopNav'>
      <h1>Currency Rates Today</h1>
      <h5>Please click on bar to find out current rate for Euro Base Currency</h5>
      <div className='currencyNav'></div>
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
