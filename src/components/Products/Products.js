import React from "react"
import {Card, Dropdown, Grid, Input, Loader, Message, Segment} from "semantic-ui-react"
import Product from "./Product"

const Products = ({products: {loading, filtered, error}, applyFilter}) =>
  <Grid.Row>
    <Grid.Column width={4}>
      <Segment>
        <Input fluid placeholder="Search..."/>
        <Dropdown placeholder="Category" fluid selection options={[
          {text: "None", value: null},
          {text: "Continuous Integration", value: "Continuous Integration"},
          {text: "Operating Systems", value: "Operating Systems"}
        ]} onChange={(e, {value}) => applyFilter('category', value)}/>
        <Dropdown placeholder="License type" fluid selection options={[
          {text: "None", value: null},
          {text: "Single-User", value: "Single-User"},
          {text: "Volume licensing", value: "Volume licensing"}
        ]} onChange={(e, {value}) => applyFilter('licenseType', value)}/>
        <Dropdown placeholder="Publisher" fluid selection options={[
          {text: "None", value: null},
          {text: "Gitlab", value: "Gitlab"},
          {text: "Microsoft", value: "Microsoft"}
        ]} onChange={(e, {value}) => applyFilter('publisher', value)}/>
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

export default Products
