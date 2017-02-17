import React, { Component } from "react";
import "./App.css";
import { Button, Card, Container, Grid, Icon, Input, List, Menu, Segment } from "semantic-ui-react";

class App extends Component {
  state = {
    active: "home"
  };

  render() {
    const products = [
      { name: "Microsoft Windows 10", price: 250 },
      { name: "Microsoft Office 2016", price: 100 },
      { name: "Ubuntu 16.10", price: 0 },
      { name: "NodeJS 0.10", price: 0 }
    ];

    const { active } = this.state;

    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Menu inverted>
                <Menu.Item
                  name="home"
                  active={active === "home"}
                  onClick={() => this.setState({ active: "home" })}
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  name="cart"
                  active={active === "cart"}
                  onClick={() => this.setState({ active: "cart" })}
                  position="right"
                >
                  <Icon name="cart"/>
                  Cart
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
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
                {
                  products.map(({ name, price }, index) =>
                    <Card key={index}>
                      <Card.Content>
                        <Card.Header>{name}</Card.Header>
                      </Card.Content>
                      <Card.Content extra>
                        <Button basic icon="cart" label="Add to Cart" labelPosition="right"/>
                      </Card.Content>
                    </Card>
                  )
                }
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                &copy; VSHN AG
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
