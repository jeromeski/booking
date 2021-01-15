const express = require('express');

const app = express();

app.get('/rentals', (req, res) => {
  res.json({
    hello: 'World'
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server Running');
});
