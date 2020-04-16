import React, { useState } from 'react';

export default function FormZero() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    alert('Um nome foi enviado: ' + name);
    event.preventDefault();
  }

  return (
    <form method="post" action="/step" onSubmit={handleSubmit}>
      <input id="step" name="step" type="hidden" value="0" />
      <label>
        Nome
        <input id="name" name="name" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
