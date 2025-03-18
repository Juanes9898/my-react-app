import React from 'react';
import ComponenteLista from './components/ComponenteLista';

function App() {
  const items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  return (
    <div className="container">
      <h1>Mi Tienda de libros</h1>
      <ComponenteLista items={items} />
    </div>
  );
}

export default App;