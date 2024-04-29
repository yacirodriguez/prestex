import React, { useState, useEffect } from 'react';
import PromosCard from './promosCard';

const PromosList = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProductos() {
            setLoading(true);
            try {
                const response = await fetch('/api/productos/todos');
                if (response.ok) {
                    const data = await response.json();
                    setProductos(data);
                } else {
                    throw new Error('Failed to fetch products');
                }
            } catch (err) {
                setError(err.message);
            }
            setLoading(false);
        }

        fetchProductos();
    }, []);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productos.map(product => (
                <PromosCard key={product.id} {...product} />
            ))}
        </section>
    );
};

export default PromosList;
