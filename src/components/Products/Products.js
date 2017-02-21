import React from "react";
import { Card, Grid, Input, List, Loader, Message, Segment } from "semantic-ui-react";
import Product from "./Product";

const Products = ({ products: { loading, data, error } }) =>
  <Grid.Row>
    <Grid.Column width={4}>
      <Segment>
        <Input fluid placeholder="Search..."/>
        <List>
          <List.Item>
            <List.Icon name="folder"/>
            <List.Content>Continuous Integration</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="folder"/>
            <List.Content>Operating Systems</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="folder"/>
            <List.Content>Webservers</List.Content>
          </List.Item>
        </List>
      </Segment>
    </Grid.Column>
    <Grid.Column width={12}>
      {
        !loading && data &&
        <Card.Group itemsPerRow={3}>
          {data.map((product, index) => <Product key={index} index={index} {...product} />)}
        </Card.Group>
      }
      {loading && <Loader active inline="centered"/>}
      {error && <Message error>{error}</Message>}
    </Grid.Column>
  </Grid.Row>;

export default Products;
