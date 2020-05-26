import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [mainCurrencies, setMainCurrencies] = useState(["HKD", "USD", "AUD", "GBP", "CAD"]);
  const [countries, setCountries] = useState('');
  const [numbers, setNumbers] = useState('');
  

  function doFetch() {
    const url = "https://api.exchangeratesapi.io/latest";
    const currencyData = [];
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("the data", data);
            console.log(data.rates);
            currencyData.push(data.rates);
            console.log(currencyData);
            // this.setState({
            //   countries: Object.keys(currencyData),
            //   numbers: Object.values(currencyData),
            // });
            setMainCurrencies(mainCurrencies);
            setCountries(Object.keys(currencyData));
            setNumbers(Object.values(currencyData));
        });
  }
  useEffect(doFetch, []);

  return (
    <div>
      <div class='TopNav'>
      <h1>Currency Rates Today</h1>
      <h5>Please click on bar to find out current rate for Euro Base Currency</h5>
      <div class='currencyNav'></div>
      </div>
      
      
      <div class="BarContainer">
      </div>
    </div>
   );
}


export default App;
