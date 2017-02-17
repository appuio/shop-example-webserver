import React from "react";
import { Container, Grid, Icon, Menu, Segment } from "semantic-ui-react";
import "./App.css";

class App extends React.Component {
  state = {
    active: "home"
  };

  render() {
    const { children } = this.props;
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
