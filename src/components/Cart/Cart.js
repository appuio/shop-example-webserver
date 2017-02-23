import React from "react";
import { Grid, Message, Segment, Table } from "semantic-ui-react";
import _map from "lodash/map";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Segment>
          {
            cart.size > 0
              ?
              <Table>
                <Table.Header>
                  <Table.HeaderCell>
                    Name
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    Quantity
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    Price
                  </Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                  {_map(cart.items, item => <CartItem {...item}/>)}
                </Table.Body>
              </Table>
              :
              <Message info>Your cart is currently empty...</Message>
          }
        </Segment>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Cart;
