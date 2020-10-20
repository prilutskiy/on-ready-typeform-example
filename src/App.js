import React from 'react';
import * as TF from '@typeform/embed'

function App() {
  return (
    <button onClick={handleOpenClick}>Open typeform</button>
  );

  function handleOpenClick() {
    const url = 'https://survey.typeform.com/to/EDlUij6h'
    TF
      .makePopup(url, {
        onReady: handleTypeformReady,
        onSubmit: handleTypeformSubmit,
      })
      .open()
  }

  function handleTypeformReady(...args) {
    console.log(args)
    console.log('Typeform is ready')
  }

  function handleTypeformSubmit(...args) {
    console.log(args)
    console.log('Typeform is submitted')
  }
}

export default App;
