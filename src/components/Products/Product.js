import React from "react";
import { Link } from "react-router";
import { Card, Icon, Label } from "semantic-ui-react";

const Product = ({ product, category, publisher, licenseType }) =>
  <Card>
    <Card.Content>
      <Card.Header>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </Card.Header>
      <Card.Description>
        <p>{product.description}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <span style={{ color: "red", fontSize: 20 }}>{product.price} CHF</span>
    </Card.Content>
    <Card.Content extra>
      <Label.Group size="small">
        <Label basic><Icon name="tag"/>{category.name}</Label>
        <Label basic><Icon name="industry"/>{publisher.name}</Label>
        <Label basic><Icon name="file text outline"/>{licenseType.name}</Label>
      </Label.Group>
    </Card.Content>
  </Card>;

export default Product;
