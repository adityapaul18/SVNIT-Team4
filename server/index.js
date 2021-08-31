const express = require('express');
const cors = require('cors');
const getData = require('./controllers/getData.js');
const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/data', getData);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
