// src/server.js
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/step/0', (req, res) => {
  const step = 0;
  const appString = renderToString(<App step={step} />);

  res.send(
    template({
      body: appString,
      title: 'Steps',
    })
  );
});

server.get('/step/1', (req, res) => {
  const step = 1;
  const appString = renderToString(<App step={step} />);

  res.send(
    template({
      body: appString,
      title: 'Steps',
    })
  );
});

server.get('/step/2', (req, res) => {
  const step = 2;
  const appString = renderToString(<App step={step} />);

  res.send(
    template({
      body: appString,
      title: 'Steps',
    })
  );
});

server.listen(3000, () => console.log('Running in PORT 3000'));
