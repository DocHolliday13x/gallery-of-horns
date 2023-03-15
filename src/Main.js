// STEP 1 - IMPORTS
import React from 'react';
import HornedBeasts from './HornedBeasts';
import './Main.css';

// STEP 2 - CREATE CLASS
class Main extends React.Component {
  render() {
    return (
      <main>
        {this.props.data.map(e => {
          return (
            <HornedBeasts
              title={e.title}
              imageUrl={e.imageUrl}
              description={e.description}
              key={e._id}
              handleOpenModal={this.props.handleOpenModal}
            />
          )
        })}
      </main>
    )
  }
}

// STEP 3 - EXPORT CLASS
export default Main;

