import React from 'react'
import {Grid, Header, Segment, Table} from 'semantic-ui-react'

const Orders = ({orders: {items}}) => {
  return (
    <Grid.Row>
      <Grid.Column width="16">
        <Header as="h1">Orders</Header>
        {items.map(item =>
          <div>
            <Header as="h2" attached="top">Order #{item.id}</Header>
            <Segment attached>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Product-UUID</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {item.products.map(product =>
                    <Table.Row><Table.Cell>{product.quantity}x</Table.Cell><Table.Cell>{product.uuid}</Table.Cell></Table.Row>)}
                </Table.Body>
              </Table>
            </Segment>
            <br />
          </div>
        )}
      </Grid.Column>
    </Grid.Row>
  )
}

export default Orders
