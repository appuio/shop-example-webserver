import React from "react";
import { Card, Grid, Input, List, Segment } from "semantic-ui-react";
import Product from "./Product";

const Home = () => {
  const products = [
    { name: "Microsoft Windows 10", price: 250 },
    { name: "Microsoft Office 2016", price: 100 },
    { name: "Ubuntu 16.10", price: 0 },
    { name: "NodeJS 0.10", price: 0 }
  ];

  return (
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
        <Card.Group itemsPerRow={3}>
          {products.map((product, index) => <Product key={index} index={index} {...product} />)}
        </Card.Group>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Home;
