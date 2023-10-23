import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const Create = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { productName, price, description } = e.target.elements;
    onSubmit({
      productName: productName.value,
      price: price.value,
      description: description.value,
    });
  };

  return (
    <Form className="create-form" onSubmit={handleSubmit}>
      <Form.Field>
        <label>Product Name</label>
        <input name="productName" placeholder="Product Name" />
      </Form.Field>
      <Form.Field>
        <label>Price</label>
        <input name="price" placeholder="Price" />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input name="description" placeholder="Description" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Create;
