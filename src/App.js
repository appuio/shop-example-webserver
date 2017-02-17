import React, { Component } from "react";
import "./App.css";
import { Container, Grid, Menu, Segment } from "semantic-ui-react";

class App extends Component {
  state = {
    active: 0
  };

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Menu inverted>
                <Menu.Item active={this.state.active === 0}
                           onClick={() => this.setState({ active: 0 })}>Home</Menu.Item>
                <Menu.Item active={this.state.active === 1} onClick={() => this.setState({ active: 1 })}
                           position="right">Account</Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="4">
              <Segment>
                FILTERS
              </Segment>
            </Grid.Column>
            <Grid.Column width="12">
              <Segment>
                PRODUCTS
              </Segment>
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
