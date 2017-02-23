import React from "react";
import { Accordion, Comment, Grid, Header, Icon, Label, Loader, Message, Segment } from "semantic-ui-react";

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
                  {data.product.name}
                </Header>
                <Label.Group size="large">
                  <Label basic><Icon name="tag"/>{data.category.name}</Label>
                  <Label basic><Icon name="industry"/>{data.publisher.name}</Label>
                  <Label basic><Icon name="file text outline"/>{data.licenseType.name}</Label>
                </Label.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header attached="top">Pricing</Header>
                <Segment attached><strong>{data.product.price} CHF</strong> ({data.licenseType.name})</Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header attached="top">Description</Header>
                <Segment attached>{data.product.description}</Segment>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header attached="top">Detailed specifications</Header>
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
            <Grid.Row>
              <Grid.Column>
                <Header attached="top">Reviews</Header>
                <Segment attached>
                  <Comment.Group>
                    <Comment>
                      <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/matt.jpg'/>
                      <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                          <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>How artistic!</Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>

                    <Comment>
                      <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg'/>
                      <Comment.Content>
                        <Comment.Author as='a'>Elliot Fu</Comment.Author>
                        <Comment.Metadata>
                          <div>Yesterday at 12:30AM</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          <p>This has been very useful for my research. Thanks as well!</p>
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                      <Comment.Group>
                        <Comment>
                          <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/jenny.jpg'/>
                          <Comment.Content>
                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                            <Comment.Metadata>
                              <div>Just now</div>
                            </Comment.Metadata>
                            <Comment.Text>
                              Elliot you are always so right :)
                            </Comment.Text>
                            <Comment.Actions>
                              <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                      </Comment.Group>
                    </Comment>

                    <Comment>
                      <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/joe.jpg'/>
                      <Comment.Content>
                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                        <Comment.Metadata>
                          <div>5 days ago</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          Dude, this is awesome. Thanks so much
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
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
