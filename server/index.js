const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.listen('3001', () => {
  console.log('Server Running on Port 3001');
});
