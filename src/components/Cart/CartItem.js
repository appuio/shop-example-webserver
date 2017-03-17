import React from 'react'
import {Button, Table} from 'semantic-ui-react'

const CartItem = ({name, quantity, price, removeItem, updateItem}) => {
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{quantity}x</Table.Cell>
      <Table.Cell>{price} CHF</Table.Cell>
      <Table.Cell collapsing>
        <Button basic icon="trash" onClick={() => removeItem()}/>
        <Button basic icon="up arrow" onClick={() => updateItem(quantity + 1)}/>
        <Button basic icon="down arrow" onClick={() => updateItem(quantity - 1)}/>
      </Table.Cell>
    </Table.Row>
  )
}

export default CartItem
