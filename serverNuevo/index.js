const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());

app.use('/api', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
