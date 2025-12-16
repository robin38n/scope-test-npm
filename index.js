const express = require('express');
  const _ = require('lodash');

  const app = express();
  app.get('/', (req, res) => {
    res.json({ message: _.capitalize('hello world') });
  });

  app.listen(3000, () => console.log('Server running'));
  
