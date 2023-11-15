import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const Edit = ({ product, onClose }) => {
  // Create local state for form fields
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
  });

  // Handle form field changes
  const handleInputChange = (e, { name, value }) => {
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    // Add your logic to update the product in the main state
    // For simplicity, you can just log the edited product for now
    console.log('Edited Product:', editedProduct);

    // Close the edit form
    onClose();
  };

  return (
    <Form>
      <Form.Input
        label="Product Name"
        name="name"
        value={editedProduct.name}
        onChange={handleInputChange}
      />
      <Form.Input
        label="Price"
        name="price"
        value={editedProduct.price}
        onChange={handleInputChange}
      />
      <Form.TextArea
        label="Description"
        name="description"
        value={editedProduct.description}
        onChange={handleInputChange}
      />

      <Button primary onClick={handleSubmit}>
        Save Changes
      </Button>
    </Form>
  );
};

export default Edit;
