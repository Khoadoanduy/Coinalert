import React, { useState, useEffect } from 'react';
import './body.css'
function Body() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api');
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className='coins'>
        {coins.map((coin) => (
          <div key={coin.id} className='coin-container'>
            <div className='coin-title'>
              <h2> {coin.name} </h2>
              <h3>{coin.symbol}</h3>
            </div>
            <div className='change-percentage'>
              <p> 24 Hours: <span>{coin.price24h}</span> </p>
              <p> 7 Days: <span>{coin.price7d}</span> </p>
              

            </div>
            <img src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${coin.id}.svg`} alt=""
  className={coin.price7d < 0 ? 'isDown' : 'isUp'} />
            <p>Price(USD): {parseFloat(coin.price).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
