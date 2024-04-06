const axios = require('axios');
const fs = require('fs');

const url = "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg";


axios({
  method: 'get',
  url: url,
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream(filename));
    console.log("Image downloaded successfully as", filename);
  })
  .catch(function (error) {
    console.log("Failed to download the image", error);
  });