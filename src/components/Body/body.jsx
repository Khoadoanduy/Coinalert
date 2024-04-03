import React from 'react';
import { useEffect } from "react";

import './body.css'
import { useState } from 'react';

function Body() {
    const [coins,setCoins] = useState([]);
    useEffect(() => {
      console.log("Fetching data...");
      async function fetchData() {
        const response = await fetch(`https://api.coincap.io/v2/assets`);
        const data = await response.json();
        setCoins(data.data);
      }
  
      fetchData();
    }, []);
    
    return (
      <div className = 'container'>
        <div className = 'coins'>
          {coins.map((coin) => (
            <div key={coin.id} className = 'coin-container'>
              <div className='coin-title'>
                <h2 >{coin.name} </h2>
                <h3  >{coin.symbol}</h3>
              </div>
              
              <p>Price(USD): {parseInt(coin.priceUsd)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
export default Body;
  