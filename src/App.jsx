import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Modal, Button, Form } from 'semantic-ui-react';
import './Forms.css';
import Create from './Components/create';
import { FaTrash, FaSearch, FaPencilAlt, FaPlus } from 'react-icons/fa';

function ProductTable({ products, onAddItemClick, showCreateForm, setShowCreateForm }) {
  return (
    <div>
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
                <button className="button-view">
                  <FaSearch /> View
                </button>
                <button className="button-add" onClick={() => onAddItemClick(product)}>
                  <FaPlus /> ADD ITEM
                </button>
                <button className="button-edit">
                  <FaPencilAlt /> Edit
                </button>
                <button className="button-delete">
                  <FaTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showCreateForm && (
        <Modal open={showCreateForm} onClose={() => setShowCreateForm(false)}>
          <Modal.Header>Add Item</Modal.Header>
          <Modal.Content>
            <Create />
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setShowCreateForm(false)}>Cancel</Button>
          </Modal.Actions>
        </Modal>
      )}
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10.99, description: 'Description of product 1' },
    { id: 2, name: 'Product 2', price: 19.99, description: 'Description of product 2' },
    { id: 3, name: 'Product 3', price: 5.99, description: 'Description of product 3' },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleAddItemClick = (product) => {
    setShowCreateForm(true);
  };

  return (
    <div className='center'>
      <div className='rectangle'>
        <h1>Item Management</h1>
        <div>
          <ProductTable
            products={products}
            onAddItemClick={handleAddItemClick}
            showCreateForm={showCreateForm}
            setShowCreateForm={setShowCreateForm}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
