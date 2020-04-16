// src/server.js
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app';
import template from './template';

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/assets', express.static('assets'));

server.get('/step', (req, res) => {
  const { step } = req.query;
  const current = parseInt(step || 0);
  const appString = renderToString(<App step={current} />);

  res.send(
    template({
      body: appString,
      title: 'Steps',
    })
  );
});

server.post('/step', (req, res) => {
  const { step } = req.body;
  const current = parseInt(step) + 1;

  res.redirect(`/step?step=${current}`);
});

server.listen(3000, () => console.log('Running in PORT 3000'));
