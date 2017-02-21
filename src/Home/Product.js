import React from "react";
import { Link } from "react-router";
import { Button, Card } from "semantic-ui-react";

const Product = ({ index, title, body }) =>
  <Card>
    <Card.Content>
      <Card.Header>
        <Link to={`/products/${index}`}>{title}</Link>
      </Card.Header>
      <Card.Description>
        Now only {body} CHF
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic icon="cart" label="Add to Cart" labelPosition="right"/>
    </Card.Content>
  </Card>;

export default Product;
