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

server.get('/step/:step', (req, res) => {
  const { step } = req.params;
  const current = parseInt(step);
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

  res.redirect(`/step/${current}`);
});

server.listen(3000, () => console.log('Running in PORT 3000'));
