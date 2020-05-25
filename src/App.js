import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        baseCurrency: "EUR",
        mainCurrencies: ["HKD", "USD", "AUD", "GBP", "CAD"],
        countries: null,
        numbers: null,
    };
}


  componentDidMount() {
    const url = "https://api.exchangeratesapi.io/latest";
    const currencyData = [];
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("the data", data);
            console.log(data.rates);
            currencyData.push(data.rates);
            console.log(currencyData);
        });

        this.setState({
          countries: Object.keys(currencyData),
          numbers: Object.values(currencyData),
          });
  }

  

  render() {
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
}

export default App;
