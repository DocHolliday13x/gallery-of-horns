import React from 'react';

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
      <>
      <h2>{this.props.title}</h2>
      <p onClick={this.handleFavorite}>♥️ {this.state.favorite} Favorites</p>
      <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
      <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornedBeasts;