import React from "react";
import { Button, Card } from "semantic-ui-react";

const Product = ({ name, price }) =>
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>Now only {price} CHF</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic icon="cart" label="Add to Cart" labelPosition="right"/>
    </Card.Content>
  </Card>;

export default Product;
