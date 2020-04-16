import React, { useState } from 'react';

export default function FormOne() {
  const [card, setCard] = useState('');

  function handleChange(event) {
    setCard(event.target.value);
  }

  function handleSubmit(event) {
    alert('Um cartão foi enviado: ' + card);
    event.preventDefault();
  }

  return (
    <form method="post" action="/step" onSubmit={handleSubmit}>
      <input id="step" name="step" type="hidden" value="1" />
      <label>
        Cartão
        <input id="card" name="card" value={card} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
