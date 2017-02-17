import React from "react";
import { Grid } from "semantic-ui-react";

const Product = ({ params }) => {
  return (
    <Grid.Row>
      <Grid.Column>
        You are on product id {params.id}
      </Grid.Column>
    </Grid.Row>
  );
};

export default Product;
