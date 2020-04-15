import React from 'react';

export default function Steps({ step }) {
  return (
    <>
      {step === 0 && <form>PRIMEIRO FORM</form>}
      {step === 1 && <form>SEGUNDO FORM</form>}
    </>
  );
}
