import React from 'react';
import { render, screen } from '@testing-library/react';
import ComponenteLista from './ComponenteLista';

const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 },
];

test('renderiza el componente correctamente', () => {
    render(<ComponenteLista productos={productos} />);
    const elemento = screen.getByText(/Producto 1/i);
    expect(elemento).toBeInTheDocument();
});

test('verifica que todos los productos se renderizan', () => {
    render(<ComponenteLista productos={productos} />);
    productos.forEach(producto => {
        const elemento = screen.getByText(new RegExp(producto.nombre, 'i'));
        expect(elemento).toBeInTheDocument();
    });
});
