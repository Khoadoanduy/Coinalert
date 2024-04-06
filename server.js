const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

const apiKey = 'aa42985b-3836-453d-838e-7d2089e21129';
const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.get('/api', async (req, res) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        'Accept': 'application/json'
      }
    });

    const data = response.data;

    if (data.status.error_code === 0) {
      const coins = data.data;
      const coinPrices = coins.map(coin => ({
        name: coin.name,
        id: coin.id,
        symbol: coin.symbol,
        price: coin.quote.USD.price,
        price24h: coin.quote.USD.percent_change_24h,
        price7d: coin.quote.USD.percent_change_7d
      }));
      res.json(coinPrices);
    } else {
      res.status(500).json({ error: data.status.error_message });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/", (req,res)=>{
  res.sendFile(__dirname + "/public/index.html")
})
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
