import React from "react";
import { Accordion, Grid, Icon, Segment } from "semantic-ui-react";

const Product = ({ product: { loading, data, error } }) =>
  <Grid.Row>
    <Grid.Column>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment>TITLE of product</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment>
              <Accordion>
                <Accordion.Title>
                  <Icon name='dropdown'/>
                  What is a dog?
                </Accordion.Title>
                <Accordion.Content>
                  <p></p>
                </Accordion.Content>
                <Accordion.Title>
                  <Icon name='dropdown'/>
                  What kinds of dogs are there?
                </Accordion.Title>
                <Accordion.Content>
                  <p>
                    There are many breeds of dogs. Each breed varies in size and temperament.
                    {' '}Owners often select a breed of dog that they find to be compatible
                    with their own lifestyle and desires from a companion.
                  </p>
                </Accordion.Content>
                <Accordion.Title>
                  <Icon name='dropdown'/>
                  How do you acquire a dog?
                </Accordion.Title>
                <Accordion.Content>
                  <p>
                    Three common ways for a prospective owner to acquire a dog is from pet shops,
                    {' '}private owners, or shelters.
                  </p>
                  <p> A pet shop may be the most convenient way to buy a dog.
                    {' '}Buying a dog from a private owner allows you to assess the pedigree and
                    {' '}upbringing of your dog before choosing to take it home. Lastly, finding your dog
                    {' '}from a shelter, helps give a good home to a dog who may not find one so readily.
                  </p>
                </Accordion.Content>
              </Accordion>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}><Segment>INFO3</Segment></Grid.Column>
          <Grid.Column width={4}><Segment>INFO4</Segment></Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid.Column>
  </Grid.Row>;

export default Product;
