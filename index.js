const express = require('express');

const app = express;

app.get('teste', (request, response) => {
  return response.json({ hello: 'world 2' })
});

app.listen('3333');