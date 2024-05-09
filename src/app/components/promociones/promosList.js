'use client'
import React, { useState } from "react";
import PromosCard from "./promosCard";
import PromosDetail from "./promosDetail";

const PromosList = ({ productos }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productos?.map((product) => (
          <PromosCard
            key={product.id}
            {...product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </section>
      {selectedProduct && <PromosDetail {...selectedProduct} />}
    </div>
  );
};

export default PromosList;
