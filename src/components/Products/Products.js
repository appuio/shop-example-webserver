import React from "react"
import {Card, Grid, Input, List, Loader, Message, Segment} from "semantic-ui-react"
import Product from "./Product"

const Products = ({products: {loading, items, error}}) =>
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
      {loading && <Loader active inline="centered"/>}
      {
        !loading &&
        <Card.Group itemsPerRow={3}>
          {items.map(item => <Product key={item.product.id} {...item} />)}
        </Card.Group>
      }
      {error && <Message error>Error: {error}</Message>}
    </Grid.Column>
  </Grid.Row>

export default Products
