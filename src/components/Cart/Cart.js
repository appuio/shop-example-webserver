import _map from 'lodash/map'
import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Grid, Message, Segment, Table} from 'semantic-ui-react'
import CartItem from './CartItem'

const Cart = ({cart, removeItem, updateItem}) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Segment>
          {
            cart.size > 0
              ?
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>
                      Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Quantity
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Price
                    </Table.HeaderCell>
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {_map(cart.items, item =>
                    <CartItem
                      key={item.uuid}
                      {...item}
                      removeItem={() => removeItem(item.uuid)}
                      updateItem={(quantity) => updateItem(item.uuid, quantity)}
                    />
                  )}
                </Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell><strong>{cart.sum} CHF</strong></Table.HeaderCell>
                    <Table.HeaderCell><Button as={Link} exact to="/checkout">Checkout</Button></Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
              :
              <Message info>Your cart is currently empty...</Message>
          }
        </Segment>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Cart
