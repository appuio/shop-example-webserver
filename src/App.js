import React from "react";
import { IndexLink } from "react-router";
import { Container, Grid, Icon, Menu, Segment } from "semantic-ui-react";
import "./App.css";

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Menu inverted>
                <Menu.Item>
                  <IndexLink to="/">Home</IndexLink>
                </Menu.Item>
                <Menu.Item position="right">
                  <Icon name="cart"/>
                  Cart
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
          {children}
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
