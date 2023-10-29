import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const View = ({ product, onClose }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <Modal.Header>Product Details</Modal.Header>
      <Modal.Content>
        <p><strong>ID:</strong> {product.id}</p>
        <p><strong>Product:</strong> {product.name}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default View;
