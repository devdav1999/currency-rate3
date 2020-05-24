import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        rates: [],
    };
}


  componentDidMount() {
    const url = "https://api.exchangeratesapi.io/latest";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("the data", data);
        });
  }

  render() {
    return (
    <div>
      <div class='TopNav'>
      <h1>Currency Rates Today</h1>
      <h5>Please click on bar to find out current rate for base currency (default is EUR)</h5>
      
      <div class="CurrencyChooser">
        <label>Base currency:
          <select onchange="changebase()" class="CurrencyChooser-select">
          </select>
        </label>
      </div>
      
      <div class='currencyNav'></div>
      </div>
      
      
      <div class="BarContainer">
      </div>
    </div>
    );
  }
}

export default App;
