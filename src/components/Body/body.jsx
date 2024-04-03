import React from 'react';
import { useEffect } from "react";
// import fetchData from "../../main";

import './body.css'
import { useState } from 'react';

function Body() {
    const [coins,setCoins] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://api.coincap.io/v2/assets`);
        const data = await response.json();
        setCoins(data.data);
      }
  
      fetchData();
    }, []);
    
    return (
      <div className = 'container'>
        <div className = 'coin-container'>
          {coins.map((coin) => (
            <div key={coin.id} >
              <h2 className = 'coin-title'>{coin.name} </h2>
              <p  className = 'coin-title'>{coin.symbol}</p>
              <p>Price(USD):{parseInt(coin.priceUsd)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
export default Body;
  