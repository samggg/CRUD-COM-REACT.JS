import React, { useState } from 'react';
import './Rectangle.css';
import { FaTrash } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Price</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
            <button className="button-view"><FaSearch /> View</button>
            <button className="button-add"><FaPlus /> ADD ITEM</button>
            <button className="button-edit"><FaPencilAlt /> Edit</button>
            <button className="button-delete"><FaTrash /> Delete</button> 
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10.99, description: 'Description of product 1' },
    { id: 2, name: 'Product 2', price: 19.99, description: 'Description of product 2' },
    { id: 3, name: 'Product 3', price: 5.99, description: 'Description of product 3' },
  ]);
  return (
    <div className='center'>
      <div className='rectangle'>
        <h1>Item Management</h1>
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default App;
