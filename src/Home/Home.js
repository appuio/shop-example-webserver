import React from "react";
import { connect } from "react-redux";
import { Card, Grid, Input, List, Loader, Message, Segment } from "semantic-ui-react";
import { fetchProducts } from "../state/actions";
import Product from "./Product";

class Home extends React.Component {
  componentDidMount() {
    const { fetch } = this.props;

    fetch();
  }

  render() {
    const { loading, data, error } = this.props.products;

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
          {
            !loading && data &&
            <Card.Group itemsPerRow={3}>
              {data.map((product, index) => <Product key={index} index={index} {...product} />)}
            </Card.Group>
          }
          {loading && <Loader active inline="centered"/>}
          {error && <Message error>{error}</Message>}
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default connect(
  state => ({
    products: state.products
  }),
  dispatch => ({
    fetch: () => dispatch(fetchProducts())
  })
)(Home);
