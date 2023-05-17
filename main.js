const express = require('express');
const app = express();
const port = 3300;

// Home route
app.get('/', (req, res) => {
  res.send('Hello, my name is Mitka!');
});

// Start the server
app.listen(port, () => {
  console.log('Server is running on port 3300');
});
