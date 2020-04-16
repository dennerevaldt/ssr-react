import React from 'react';

import FormZero from '../../components/FormZero';
import FormOne from '../../components/FormOne';
import Success from '../../components/Success';

export default function Steps({ step }) {
  return (
    <>
      {step === 0 && <FormZero />}
      {step === 1 && <FormOne />}
      {step === 2 && <Success />}
    </>
  );
}
