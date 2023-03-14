import React from 'react';
import './HornedBeasts.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0,
    }
  }

  // METHOD TO UPDATE STATE FOR EACH HORNED BEAST TO TRACK FAVORITE CLICKS
  handleFavorite = () => {
    this.setState({ // react method that takes in object and rebuilds that state obj
      favorite: this.state.favorite + 1
    })
  }



  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imageUrl} />
      <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>{this.props.description}</Card.Text>
      <Button variant="secondary" size="sm" onClick={this.handleFavorite}>♥️ {this.state.favorite} Love It!</Button>
      </Card.Body>
      </Card>
      // <article>
      // <h2>{this.props.title}</h2>
      // <p>♥️ {this.state.favorite} Favorites</p>
      // <Button variant="secondary" size="sm" onClick={this.handleFavorite}>Love It!</Button>
      // <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
      // <p>{this.props.description}</p>
      // </article>
    )
  }
}

export default HornedBeasts;