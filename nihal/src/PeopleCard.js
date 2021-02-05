import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, company, description } = this.props.person;
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBlock>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{company}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button color="success" onClick={() => this.props.removePerson(id)}>Search</Button>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;
