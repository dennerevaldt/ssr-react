// app/index.js
import React from 'react';

import Router from './router';

export default function App({ step }) {
  return <Router step={step} />;
}
