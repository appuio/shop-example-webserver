import _map from 'lodash/map'
import React from 'react'
import {Button, Grid, Header, List, Segment, Table} from 'semantic-ui-react'

const Checkout = ({cart, checkout}) => {
  return (
    <Grid.Row>
      <Grid.Column width="12">

        <Header as="h2" attached="top">Shipping</Header>
        <Segment attached>
          form for shipping address...
        </Segment>

        <Header as="h2" attached="top">Payment</Header>
        <Segment attached>
          form for payment details...
        </Segment>

      </Grid.Column>
      <Grid.Column width="4">

        <Header as="h2" attached="top">Summary</Header>
        <Segment attached>
          <List divided relaxed>
            <Table celled>
              <Table.Body>
                {_map(cart.items, item =>
                  <Table.Row>
                    <Table.Cell>{item.quantity}x {item.name}</Table.Cell>
                    <Table.Cell>{item.quantity * item.price}</Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell>Sum</Table.HeaderCell>
                  <Table.HeaderCell><strong>{cart.sum}</strong></Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </List>
          <Button onClick={checkout}>Order!</Button>
        </Segment>

      </Grid.Column>
    </Grid.Row>
  )
}

export default Checkout
