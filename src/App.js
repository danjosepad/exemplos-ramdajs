import React from 'react';

import { curry, add } from './functions/curryexample';

function App() {
  // Example of length of arguments 
  const curriedLength = curry(add);
  const result = curriedLength(1)(2)(3)(4)
  console.log('result', result)

  return (
    <div className="App">
      <p>
        Resultado: {result}
      </p>
    </div>
  );
}

export default App;
