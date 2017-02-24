import React from "react"
import {Table} from "semantic-ui-react"

const CartItem = ({name, quantity, price}) => {
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{quantity}</Table.Cell>
      <Table.Cell>{price}</Table.Cell>
    </Table.Row>
  )
}

export default CartItem
