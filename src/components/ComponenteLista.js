import React from 'react';
import { useEffect, useState } from 'react';

const ComponenteLista = ({ items }) => {
    // Simulando la carga de productos desde un archivo JSON
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('./JSON/productos.json');
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error('Error fetching the productos:', error);
            }
        };
        fetchProductos();
    }, []);
    
    return (
        <div className="container">
            {productos.map((producto) => (
                <div className="card mb-3" key={producto.id}>
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">Precio: ${producto.precio}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ComponenteLista;