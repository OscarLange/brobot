const axios = require('axios')

axios.get("https://icanhazdadjoke.com/", {
    headers: {
      "Accept":"text/plain",
      "User-Agent": "My example script, will stop doing API call in a few days :)"
    }
  })
  .then(res => console.log(res.data))