import React from "react"
import {Card, Dropdown, Grid, Input, Loader, Message, Segment} from "semantic-ui-react"
import Product from "./Product"

const Products = ({products: {loading, filtered, filters, error}, applyFilter}) => {
  // dynamically calculate the options to be displayed in the sidebar
  const categoryOptions = filters.categories.map(category => ({text: category, value: category}))
  const licenseTypeOptions = filters.licenseTypes.map(licenseType => ({text: licenseType, value: licenseType}))
  const publisherOptions = filters.publishers.map(publisher => ({text: publisher, value: publisher}))

  return (
    <Grid.Row>
      <Grid.Column width={4}>
        <Segment>
          <Input fluid placeholder="Search..."/>
          <Dropdown
            placeholder="Category"
            fluid
            multiple selection
            options={categoryOptions}
            onChange={(e, {value}) => applyFilter('category', value)}
          />
          <Dropdown
            placeholder="License type"
            fluid
            multiple selection
            options={licenseTypeOptions}
            onChange={(e, {value}) => applyFilter('licenseType', value)}
          />
          <Dropdown
            placeholder="Publisher"
            fluid
            multiple selection
            options={publisherOptions}
            onChange={(e, {value}) => applyFilter('publisher', value)}
          />
        </Segment>
      </Grid.Column>
      <Grid.Column width={12}>
        {loading && <Loader active inline="centered"/>}
        {
          !loading &&
          <Card.Group itemsPerRow={3}>
            {filtered.map(item => <Product key={item.product.id} {...item} />)}
          </Card.Group>
        }
        {error && <Message error>Error: {error}</Message>}
      </Grid.Column>
    </Grid.Row>
  )
}

export default Products
