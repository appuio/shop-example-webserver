import React from "react";
import { IndexLink } from "react-router";
import { Container, Grid, Icon, Menu, Segment } from "semantic-ui-react";

class App extends React.Component {
  render() {
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
          {this.props.children}
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
