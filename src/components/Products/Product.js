import React from "react";
import { Link } from "react-router";
import { Button, Card } from "semantic-ui-react";

const Product = ({ id, name, price }) =>
  <Card>
    <Card.Content>
      <Card.Header>
        <Link to={`/products/${id}`}>{name}</Link>
      </Card.Header>
      <Card.Description>
        Now only {price} CHF
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic icon="cart" label="Add to Cart" labelPosition="right"/>
    </Card.Content>
  </Card>;

export default Product;
