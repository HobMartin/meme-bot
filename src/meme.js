const axios = require('axios');

async function getMeme() {
  const req = await axios.get('https://meme-api.herokuapp.com/gimme');
  if(req.data) return req.data
  return req.data;
}

module.exports = getMeme;
