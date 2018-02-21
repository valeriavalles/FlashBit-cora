const express = require('express');
const app = express();
const puerto = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running on port ' + puerto + '!');
});

app.use(express.static('public'));