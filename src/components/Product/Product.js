import React from "react";
import { Accordion, Grid, Header, Icon, Loader, Message, Segment } from "semantic-ui-react";

const Product = ({ product: { loading, data, error } }) => {
  return (
    <Grid.Row>
      <Grid.Column>
        {loading && <Loader active inline="centered"/>}
        {
          !loading && data &&
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1">
                  {data.name}
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header attached="top">Pricing</Header>
                <Segment attached>Yearly license fee: {data.price} CHF</Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header attached="top">Description</Header>
                <Segment attached>Blabla blubb</Segment>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header attached="top">Specifications</Header>
                <Segment attached>
                  <Accordion>
                    <Accordion.Title>
                      <Icon name='dropdown'/>
                      Supported operating systems
                    </Accordion.Title>
                    <Accordion.Content>
                      <p>Sorry, Linux only..</p>
                    </Accordion.Content>
                    <Accordion.Title>
                      <Icon name='dropdown'/>
                      Hardware requirements
                    </Accordion.Title>
                    <Accordion.Content>
                      <p>16 cores, 128GB RAM</p>
                    </Accordion.Content>
                  </Accordion>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        }
        {error && <Message error>Error: {error}</Message>}
      </Grid.Column>
    </Grid.Row>
  );
};

export default Product;
