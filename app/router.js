import React from 'react';

// screens
import NotFound from './screens/NotFound';
import Checkout from './screens/Checkout';

const Router = ({ step }) => {
  if (step > 2) return <NotFound />;
  return <Checkout step={step} />;
};

export default Router;
