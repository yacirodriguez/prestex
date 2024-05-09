// PromosLayout.js
import React from 'react';
import Card from '../components/ui/Card';
const PromosLayout = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {productos.map(producto => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default PromosLayout;
