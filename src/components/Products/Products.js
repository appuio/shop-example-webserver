import React from 'react'
import {Card, Dropdown, Grid, Input, Message, Segment} from 'semantic-ui-react'
import Product from './Product'

const Products = ({products: {loading, filtered, filters, error}, applyFilter}) => {
  const mapToOptions = (items) => {
    items.map(item => ({text: item, value: item}))
  }

  return (
    <Grid.Row>
      <Grid.Column width={4}>
        <Segment>
          <Input fluid placeholder="Search..."/>
          <Dropdown
            placeholder="Category"
            fluid
            multiple selection
            options={mapToOptions(filters.categories)}
            onChange={(e, {value}) => applyFilter('category', value)}
          />
          <Dropdown
            placeholder="License type"
            fluid
            multiple selection
            options={mapToOptions(filters.licenseTypes)}
            onChange={(e, {value}) => applyFilter('licenseType', value)}
          />
          <Dropdown
            placeholder="Publisher"
            fluid
            multiple selection
            options={mapToOptions(filters.publishers)}
            onChange={(e, {value}) => applyFilter('publisher', value)}
          />
        </Segment>
      </Grid.Column>
      <Grid.Column width={12}>
        <Segment loading={loading}>
          {error && <Message error>Error: {error}</Message>}
          {
            <Card.Group itemsPerRow={3}>
              {filtered.map(item => <Product key={item.product.id} {...item} />)}
            </Card.Group>
          }
        </Segment>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Products
