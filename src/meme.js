const axios = require('axios');

async function getMeme() {
  const req = await axios.get('https://meme-api.herokuapp.com/gimme');
  return req.data;
}

module.exports = getMeme;
