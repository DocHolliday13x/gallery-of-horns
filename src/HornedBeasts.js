import React from 'react';
import './HornedBeasts.css';


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
      <article>
      <h2>{this.props.title}</h2>
      <p>♥️ {this.state.favorite} Favorites</p>
      <button onClick={this.handleFavorite}>Love It!</button>
      <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
      <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeasts;